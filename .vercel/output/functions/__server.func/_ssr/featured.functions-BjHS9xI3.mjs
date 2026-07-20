import { c as createServerRpc } from "./createServerRpc-Q-WznjGe.mjs";
import { c as createServerFn } from "./server-Bh35ipan.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "../_libs/scheduler.mjs";
import "stream";
import "util";
import "../_libs/isbot.mjs";
const getFeatured_createServerFn_handler = createServerRpc({
  id: "81350ec7aa34e942ff8bb422941384ad3fb1058d41b6d5bec63c21d8a1eb9e9d",
  name: "getFeatured",
  filename: "src/lib/featured.functions.ts"
}, (opts) => getFeatured.__executeServer(opts));
const getFeatured = createServerFn({
  method: "GET"
}).handler(getFeatured_createServerFn_handler, async () => {
  const {
    supabaseAdmin
  } = await import("./client.server-C8UZwOtV.mjs");
  const {
    data: files
  } = await supabaseAdmin.storage.from("featured").list("", {
    limit: 1,
    sortBy: {
      column: "created_at",
      order: "desc"
    }
  });
  if (!files || files.length === 0) return null;
  const {
    data: {
      publicUrl
    }
  } = supabaseAdmin.storage.from("featured").getPublicUrl(files[0].name);
  const {
    data: dbData
  } = await supabaseAdmin.from("featured_content").select("description").eq("id", 1).single();
  return {
    url: publicUrl,
    description: dbData?.description || null
  };
});
const uploadFeatured_createServerFn_handler = createServerRpc({
  id: "641977b8460a8417ec67870e93612860c84f16232892c0707d91e0a4fd1da47a",
  name: "uploadFeatured",
  filename: "src/lib/featured.functions.ts"
}, (opts) => uploadFeatured.__executeServer(opts));
const uploadFeatured = createServerFn({
  method: "POST"
}).validator((d) => objectType({
  base64: stringType().min(1, "Image data is required"),
  mimeType: stringType().regex(/^image\/(jpeg|png|gif|webp|svg\+xml)$/i, "Invalid image MIME type"),
  fileName: stringType().min(1).max(255),
  description: stringType().optional()
}).parse(d)).handler(uploadFeatured_createServerFn_handler, async ({
  data
}) => {
  const {
    requireAdmin
  } = await import("./guards.server-Bm5uQI0K.mjs");
  const {
    supabaseAdmin
  } = await import("./client.server-C8UZwOtV.mjs");
  await requireAdmin();
  const MAX_SIZE_BYTES = 5 * 1024 * 1024;
  const estimatedSize = Math.ceil(data.base64.length * 0.75);
  if (estimatedSize > MAX_SIZE_BYTES) {
    throw new Error("File is too large (max 5 MB)");
  }
  const {
    data: existing
  } = await supabaseAdmin.storage.from("featured").list("");
  if (existing && existing.length > 0) {
    await supabaseAdmin.storage.from("featured").remove(existing.map((f) => f.name));
  }
  const buffer = Buffer.from(data.base64, "base64");
  const ext = data.fileName.split(".").pop() || "png";
  const name = `featured-${Date.now()}.${ext}`;
  const {
    error
  } = await supabaseAdmin.storage.from("featured").upload(name, buffer, {
    contentType: data.mimeType,
    upsert: true
  });
  if (error) throw new Error("Failed to upload featured image: " + error.message);
  if (data.description) {
    await supabaseAdmin.from("featured_content").upsert({
      id: 1,
      description: data.description
    });
  } else {
    await supabaseAdmin.from("featured_content").delete().eq("id", 1);
  }
  return {
    ok: true
  };
});
const removeFeatured_createServerFn_handler = createServerRpc({
  id: "ca6a36013cdbc7e758471921aa96b455d1f2efa7e13fbcfac2a1dd75fcf01aca",
  name: "removeFeatured",
  filename: "src/lib/featured.functions.ts"
}, (opts) => removeFeatured.__executeServer(opts));
const removeFeatured = createServerFn({
  method: "POST"
}).handler(removeFeatured_createServerFn_handler, async () => {
  const {
    requireAdmin
  } = await import("./guards.server-Bm5uQI0K.mjs");
  const {
    supabaseAdmin
  } = await import("./client.server-C8UZwOtV.mjs");
  await requireAdmin();
  const {
    data: existing
  } = await supabaseAdmin.storage.from("featured").list("");
  if (existing && existing.length > 0) {
    await supabaseAdmin.storage.from("featured").remove(existing.map((f) => f.name));
  }
  await supabaseAdmin.from("featured_content").delete().eq("id", 1);
  return {
    ok: true
  };
});
export {
  getFeatured_createServerFn_handler,
  removeFeatured_createServerFn_handler,
  uploadFeatured_createServerFn_handler
};
