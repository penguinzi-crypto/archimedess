import { c as createServerRpc } from "./createServerRpc-DlWgCRnB.js";
import { c as createServerFn } from "./server-BiCOV7P_.js";
import { z } from "zod";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "react";
import "@tanstack/react-router";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
const getAssignments_createServerFn_handler = createServerRpc({
  id: "1416b5e6c0cedc37dda3615caad941dc2e1cb203a98e25677e88a16e45b26c0f",
  name: "getAssignments",
  filename: "src/lib/assignments.functions.ts"
}, (opts) => getAssignments.__executeServer(opts));
const getAssignments = createServerFn({
  method: "GET"
}).handler(getAssignments_createServerFn_handler, async () => {
  const {
    requireUser
  } = await import("./guards.server-C3MGVjZd.js");
  const {
    supabaseAdmin
  } = await import("./client.server-C8UZwOtV.js");
  await requireUser();
  const {
    data,
    error
  } = await supabaseAdmin.from("assignments").select("*").order("created_at", {
    ascending: false
  });
  if (error) throw new Error(error.message);
  return data ?? [];
});
const getStudentCompletions_createServerFn_handler = createServerRpc({
  id: "a098deac76ddc059d2b7c57fb3f613f02429ac1e9ce7d4dcaeef8547eae758d7",
  name: "getStudentCompletions",
  filename: "src/lib/assignments.functions.ts"
}, (opts) => getStudentCompletions.__executeServer(opts));
const getStudentCompletions = createServerFn({
  method: "GET"
}).handler(getStudentCompletions_createServerFn_handler, async () => {
  const {
    requireUser,
    getUser
  } = await import("./guards.server-C3MGVjZd.js");
  const {
    supabaseAdmin
  } = await import("./client.server-C8UZwOtV.js");
  await requireUser();
  const user = await getUser();
  if (user?.id === "guest") return [];
  const {
    data,
    error
  } = await supabaseAdmin.from("assignment_completions").select("assignment_id").eq("student_id", user?.id);
  if (error) throw new Error(error.message);
  return data?.map((d) => d.assignment_id) ?? [];
});
const markAssignmentDone_createServerFn_handler = createServerRpc({
  id: "91bd0ee1ed9b80080c77f1beda9049c334df88548c5c61ad9db3c249eb1adfc1",
  name: "markAssignmentDone",
  filename: "src/lib/assignments.functions.ts"
}, (opts) => markAssignmentDone.__executeServer(opts));
const markAssignmentDone = createServerFn({
  method: "POST"
}).validator((d) => z.object({
  assignmentId: z.string().uuid()
}).parse(d)).handler(markAssignmentDone_createServerFn_handler, async ({
  data
}) => {
  const {
    requireUser,
    getUser
  } = await import("./guards.server-C3MGVjZd.js");
  const {
    supabaseAdmin
  } = await import("./client.server-C8UZwOtV.js");
  await requireUser();
  const user = await getUser();
  if (user?.id === "guest") throw new Error("Guests cannot complete assignments");
  const {
    error
  } = await supabaseAdmin.from("assignment_completions").insert({
    assignment_id: data.assignmentId,
    student_id: user?.id
  });
  if (error) throw new Error(error.message);
  return {
    success: true
  };
});
const createAssignment_createServerFn_handler = createServerRpc({
  id: "5437345eefbfb8a244b7030976504e01716e625be069b33c8fd68cf13c85fa82",
  name: "createAssignment",
  filename: "src/lib/assignments.functions.ts"
}, (opts) => createAssignment.__executeServer(opts));
const createAssignment = createServerFn({
  method: "POST"
}).validator((d) => z.object({
  title: z.string().min(1),
  instruction: z.string().min(1),
  deadline_at: z.string().nullable(),
  base64Image: z.string().optional(),
  mimeType: z.string().optional(),
  fileName: z.string().optional()
}).parse(d)).handler(createAssignment_createServerFn_handler, async ({
  data
}) => {
  const {
    requireAdmin
  } = await import("./guards.server-C3MGVjZd.js");
  const {
    supabaseAdmin
  } = await import("./client.server-C8UZwOtV.js");
  await requireAdmin();
  let image_url = null;
  if (data.base64Image && data.mimeType && data.fileName) {
    const fileBuffer = Buffer.from(data.base64Image, "base64");
    const uniqueName = `${Date.now()}_${data.fileName.replace(/[^a-zA-Z0-9.\-_]/g, "")}`;
    const {
      data: uploadData,
      error: uploadError
    } = await supabaseAdmin.storage.from("assignments").upload(uniqueName, fileBuffer, {
      contentType: data.mimeType,
      upsert: true
    });
    if (uploadError) throw new Error("Image upload failed: " + uploadError.message);
    const {
      data: publicData
    } = supabaseAdmin.storage.from("assignments").getPublicUrl(uniqueName);
    image_url = publicData.publicUrl;
  }
  const {
    data: row,
    error
  } = await supabaseAdmin.from("assignments").insert({
    title: data.title,
    instruction: data.instruction,
    deadline_at: data.deadline_at,
    image_url
  }).select().single();
  if (error) throw new Error(error.message);
  return row;
});
const deleteAssignment_createServerFn_handler = createServerRpc({
  id: "f5f19ebf6eb94457b65564c4aa811a089d7678e9c58da8cee33b06cd553ee9ca",
  name: "deleteAssignment",
  filename: "src/lib/assignments.functions.ts"
}, (opts) => deleteAssignment.__executeServer(opts));
const deleteAssignment = createServerFn({
  method: "POST"
}).validator((d) => z.object({
  id: z.string().uuid()
}).parse(d)).handler(deleteAssignment_createServerFn_handler, async ({
  data
}) => {
  const {
    requireAdmin
  } = await import("./guards.server-C3MGVjZd.js");
  const {
    supabaseAdmin
  } = await import("./client.server-C8UZwOtV.js");
  await requireAdmin();
  const {
    error
  } = await supabaseAdmin.from("assignments").delete().eq("id", data.id);
  if (error) throw new Error(error.message);
  return {
    success: true
  };
});
export {
  createAssignment_createServerFn_handler,
  deleteAssignment_createServerFn_handler,
  getAssignments_createServerFn_handler,
  getStudentCompletions_createServerFn_handler,
  markAssignmentDone_createServerFn_handler
};
