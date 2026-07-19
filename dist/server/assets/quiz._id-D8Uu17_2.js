import { c as createServerRpc } from "./createServerRpc-DlWgCRnB.js";
import { c as createServerFn } from "./server-BiCOV7P_.js";
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
const serverGuardUser_createServerFn_handler = createServerRpc({
  id: "554105170339902768f92f94d0c666bceb89144ceba78b117a7f2b74fd362511",
  name: "serverGuardUser",
  filename: "src/routes/quiz.$id.tsx"
}, (opts) => serverGuardUser.__executeServer(opts));
const serverGuardUser = createServerFn({
  method: "GET"
}).handler(serverGuardUser_createServerFn_handler, async () => {
  const {
    redirectUnlessUser
  } = await import("./guards.server-C3MGVjZd.js");
  await redirectUnlessUser();
});
export {
  serverGuardUser_createServerFn_handler
};
