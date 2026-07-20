import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const listStudents = createServerFn({ method: "GET" }).handler(async () => {
  const { requireAdmin } = await import("./guards.server");
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  await requireAdmin();
  const { data } = await supabaseAdmin
    .from("users")
    .select("id, name, role, disabled, created_at")
    .eq("role", "student")
    .order("created_at", { ascending: false });
  return data ?? [];
});

export const createStudent = createServerFn({ method: "POST" })
  .validator((d) =>
    z
      .object({
        name: z.string().min(1).max(100),
        pin: z.string().min(4).max(32),
      })
      .parse(d),
  )
  .handler(async ({ data }) => {
    const { requireAdmin } = await import("./guards.server");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const bcrypt = (await import("bcryptjs")).default;
    await requireAdmin();

    const hash = await bcrypt.hash(data.pin, 10);
    const { error } = await supabaseAdmin.from("users").insert({
      name: data.name,
      role: "student",
      pin_hash: hash,
    });
    if (error) throw new Error("Could not create student");
    return { ok: true };
  });

export const toggleStudentDisabled = createServerFn({ method: "POST" })
  .validator((d) =>
    z.object({ id: z.string().uuid(), disabled: z.boolean() }).parse(d),
  )
  .handler(async ({ data }) => {
    const { requireAdmin } = await import("./guards.server");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    await requireAdmin();
    await supabaseAdmin.from("users").update({ disabled: data.disabled }).eq("id", data.id);
    return { ok: true };
  });

export const deleteStudent = createServerFn({ method: "POST" })
  .validator((d) => z.object({ id: z.string().uuid() }).parse(d))
  .handler(async ({ data }) => {
    const { requireAdmin } = await import("./guards.server");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    await requireAdmin();
    await supabaseAdmin.from("submissions").delete().eq("student_id", data.id);
    await supabaseAdmin.from("users").delete().eq("id", data.id).eq("role", "student");
    return { ok: true };
  });

/* ============== ADMIN MANAGEMENT (Super Admin Only) ============== */

export const listAdmins = createServerFn({ method: "GET" }).handler(async () => {
  const { requireSuperAdmin } = await import("./guards.server");
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  await requireSuperAdmin();
  const { data } = await supabaseAdmin
    .from("users")
    .select("id, name, role, disabled, is_super_admin, pin_must_change, created_at")
    .eq("role", "admin")
    .eq("is_super_admin", false)
    .order("created_at", { ascending: false });
  return data ?? [];
});

export const createAdmin = createServerFn({ method: "POST" })
  .validator((d) =>
    z.object({
      name: z.string().min(1).max(100),
      pin: z.string().min(4).max(32),
    }).parse(d),
  )
  .handler(async ({ data }) => {
    const { requireSuperAdmin } = await import("./guards.server");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const bcrypt = (await import("bcryptjs")).default;
    await requireSuperAdmin();

    const hash = await bcrypt.hash(data.pin, 10);
    const { error } = await supabaseAdmin.from("users").insert({
      name: data.name,
      role: "admin",
      pin_hash: hash,
      pin_must_change: true,
      is_super_admin: false,
    });
    if (error) throw new Error("Could not create admin");
    return { ok: true };
  });

export const deleteAdmin = createServerFn({ method: "POST" })
  .validator((d) => z.object({ id: z.string().uuid() }).parse(d))
  .handler(async ({ data }) => {
    const { requireSuperAdmin } = await import("./guards.server");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    await requireSuperAdmin();

    // Prevent deleting a super admin
    const { data: target } = await supabaseAdmin
      .from("users")
      .select("is_super_admin")
      .eq("id", data.id)
      .single();
    if (target?.is_super_admin) throw new Error("Cannot delete super admin");

    await supabaseAdmin.from("users").delete().eq("id", data.id).eq("role", "admin");
    return { ok: true };
  });

export const resetAdminPin = createServerFn({ method: "POST" })
  .validator((d) =>
    z.object({
      id: z.string().uuid(),
      newPin: z.string().min(4).max(32),
    }).parse(d),
  )
  .handler(async ({ data }) => {
    const { requireSuperAdmin } = await import("./guards.server");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const bcrypt = (await import("bcryptjs")).default;
    await requireSuperAdmin();

    // Prevent resetting super admin PIN
    const { data: target } = await supabaseAdmin
      .from("users")
      .select("is_super_admin")
      .eq("id", data.id)
      .single();
    if (target?.is_super_admin) throw new Error("Cannot reset super admin PIN");

    const hash = await bcrypt.hash(data.newPin, 10);
    const { error } = await supabaseAdmin
      .from("users")
      .update({ pin_hash: hash, pin_must_change: true })
      .eq("id", data.id);
    if (error) throw new Error("Could not reset PIN");
    return { ok: true };
  });
