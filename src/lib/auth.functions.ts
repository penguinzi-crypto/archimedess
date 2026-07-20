import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export type CurrentUser = {
  id: string;
  name: string;
  role: "admin" | "student";
  isSuperAdmin?: boolean;
  pinMustChange?: boolean;
};

export const loginWithPin = createServerFn({ method: "POST" })
  .validator((d) => z.object({ pin: z.string().min(1).max(64) }).parse(d))
  .handler(async ({ data }): Promise<CurrentUser> => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const bcrypt = (await import("bcryptjs")).default;
    const { getAppSession } = await import("./session.server");

    const pin = data.pin.trim();
    const { data: users, error } = await supabaseAdmin
      .from("users")
      .select("id, name, role, disabled, pin_hash, is_super_admin, pin_must_change");
    if (error) throw new Error("Database error");

    // Compare against every hash (small user table)
    type Row = { id: string; name: string; role: string; disabled: boolean; pin_hash: string | null; is_super_admin: boolean; pin_must_change: boolean };
    let matched: Row | null = null;
    for (const u of (users ?? []) as Row[]) {
      if (!u.pin_hash) continue;
      if (await bcrypt.compare(pin, u.pin_hash)) {
        matched = u;
        break;
      }
    }
    if (!matched) throw new Error("Invalid PIN");
    if (matched.disabled) throw new Error("Account disabled");

    const session = await getAppSession();
    await session.update({
      userId: matched.id,
      role: matched.role as "admin" | "student",
      name: matched.name,
      isSuperAdmin: matched.is_super_admin ?? false,
      pinMustChange: matched.pin_must_change ?? false,
    });

    return {
      id: matched.id,
      name: matched.name,
      role: matched.role as "admin" | "student",
      isSuperAdmin: matched.is_super_admin ?? false,
      pinMustChange: matched.pin_must_change ?? false,
    };
  });

export const getCurrentUser = createServerFn({ method: "GET" }).handler(
  async (): Promise<CurrentUser | null> => {
    const { getAppSession } = await import("./session.server");
    const session = await getAppSession();
    if (!session.data.userId || !session.data.role || !session.data.name) return null;
    return {
      id: session.data.userId,
      name: session.data.name,
      role: session.data.role,
      isSuperAdmin: session.data.isSuperAdmin ?? false,
      pinMustChange: session.data.pinMustChange ?? false,
    };
  },
);

export const signOut = createServerFn({ method: "POST" }).handler(async () => {
  const { getAppSession } = await import("./session.server");
  const session = await getAppSession();
  await session.clear();
  return { ok: true };
});

export const loginAsGuest = createServerFn({ method: "POST" }).handler(
  async (): Promise<CurrentUser> => {
    const { getAppSession } = await import("./session.server");
    const session = await getAppSession();
    await session.update({
      userId: "guest",
      role: "student",
      name: "Guest",
    });
    return { id: "guest", name: "Guest", role: "student" };
  },
);

export const changeMyPin = createServerFn({ method: "POST" })
  .validator((d) =>
    z.object({
      currentPin: z.string().min(1).max(64),
      newPin: z.string().min(4).max(32),
    }).parse(d),
  )
  .handler(async ({ data }) => {
    const { requireAdmin } = await import("./guards.server");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const bcrypt = (await import("bcryptjs")).default;
    const { getAppSession } = await import("./session.server");

    const admin = await requireAdmin();

    // Verify current PIN
    const { data: user } = await supabaseAdmin
      .from("users")
      .select("pin_hash")
      .eq("id", admin.id)
      .single();

    if (!user?.pin_hash || !(await bcrypt.compare(data.currentPin, user.pin_hash))) {
      throw new Error("Current PIN is incorrect");
    }

    // Hash and update new PIN
    const newHash = await bcrypt.hash(data.newPin, 10);
    const { error } = await supabaseAdmin
      .from("users")
      .update({ pin_hash: newHash, pin_must_change: false })
      .eq("id", admin.id);

    if (error) throw new Error("Could not update PIN");

    // Update session to clear pinMustChange
    const session = await getAppSession();
    await session.update({ ...session.data, pinMustChange: false });

    return { ok: true };
  });

export const forceChangePin = createServerFn({ method: "POST" })
  .validator((d) =>
    z.object({
      newPin: z.string().min(4).max(32),
    }).parse(d),
  )
  .handler(async ({ data }) => {
    const { requireUser } = await import("./guards.server");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const bcrypt = (await import("bcryptjs")).default;
    const { getAppSession } = await import("./session.server");

    const user = await requireUser();
    const session = await getAppSession();

    // Only allowed if pin_must_change is true
    if (!session.data.pinMustChange) {
      throw new Error("PIN change not required");
    }

    const newHash = await bcrypt.hash(data.newPin, 10);
    const { error } = await supabaseAdmin
      .from("users")
      .update({ pin_hash: newHash, pin_must_change: false })
      .eq("id", user.id);

    if (error) throw new Error("Could not update PIN");

    await session.update({ ...session.data, pinMustChange: false });

    return { ok: true };
  });
