import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/**
 * Get the public URL of the current "featured" image and its description.
 * Returns null if no featured post exists.
 */
export const getFeatured = createServerFn({ method: "GET" }).handler(
  async (): Promise<{ url: string; description: string | null } | null> => {
    const { supabaseAdmin } = await import(
      "@/integrations/supabase/client.server"
    );

    const { data: files } = await supabaseAdmin.storage
      .from("featured")
      .list("", { limit: 1, sortBy: { column: "created_at", order: "desc" } });

    if (!files || files.length === 0) return null;

    const {
      data: { publicUrl },
    } = supabaseAdmin.storage.from("featured").getPublicUrl(files[0].name);

    // Fetch the description from the database
    const { data: dbData } = await supabaseAdmin
      .from("featured_content")
      .select("description")
      .eq("id", 1)
      .single();

    return {
      url: publicUrl,
      description: dbData?.description || null,
    };
  },
);

/**
 * Admin-only: upload a new featured image and description, replacing the existing one.
 */
export const uploadFeatured = createServerFn({ method: "POST" })
  .validator(
    (d: unknown) =>
      z
        .object({
          base64: z.string().min(1, "Image data is required"),
          mimeType: z
            .string()
            .regex(/^image\/(jpeg|png|gif|webp|svg\+xml)$/i, "Invalid image MIME type"),
          fileName: z.string().min(1).max(255),
          description: z.string().optional(),
        })
        .parse(d),
  )
  .handler(async ({ data }) => {
    const { requireAdmin } = await import("./guards.server");
    const { supabaseAdmin } = await import(
      "@/integrations/supabase/client.server"
    );
    await requireAdmin();

    const MAX_SIZE_BYTES = 5 * 1024 * 1024;
    const estimatedSize = Math.ceil(data.base64.length * 0.75);
    if (estimatedSize > MAX_SIZE_BYTES) {
      throw new Error("File is too large (max 5 MB)");
    }

    // Remove all existing featured files
    const { data: existing } = await supabaseAdmin.storage
      .from("featured")
      .list("");
    if (existing && existing.length > 0) {
      await supabaseAdmin.storage
        .from("featured")
        .remove(existing.map((f) => f.name));
    }

    // Upload new image
    const buffer = Buffer.from(data.base64, "base64");
    const ext = data.fileName.split(".").pop() || "png";
    const name = `featured-${Date.now()}.${ext}`;

    const { error } = await supabaseAdmin.storage
      .from("featured")
      .upload(name, buffer, {
        contentType: data.mimeType,
        upsert: true,
      });

    if (error) throw new Error("Failed to upload featured image: " + error.message);

    // Save description to database
    if (data.description) {
      await supabaseAdmin
        .from("featured_content")
        .upsert({ id: 1, description: data.description });
    } else {
      await supabaseAdmin.from("featured_content").delete().eq("id", 1);
    }

    return { ok: true };
  });

/**
 * Admin-only: remove the current featured post.
 */
export const removeFeatured = createServerFn({ method: "POST" }).handler(
  async () => {
    const { requireAdmin } = await import("./guards.server");
    const { supabaseAdmin } = await import(
      "@/integrations/supabase/client.server"
    );
    await requireAdmin();

    const { data: existing } = await supabaseAdmin.storage
      .from("featured")
      .list("");
    if (existing && existing.length > 0) {
      await supabaseAdmin.storage
        .from("featured")
        .remove(existing.map((f) => f.name));
    }

    await supabaseAdmin.from("featured_content").delete().eq("id", 1);

    return { ok: true };
  },
);
