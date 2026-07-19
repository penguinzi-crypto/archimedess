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
  id: "2cbd6b83c419d1668554bd14ec17067f56c940f21e87031d1b14fe2317ee4f49",
  name: "serverGuardUser",
  filename: "src/routes/student.tsx"
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
