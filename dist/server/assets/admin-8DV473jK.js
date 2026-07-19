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
const serverGuardAdmin_createServerFn_handler = createServerRpc({
  id: "6d6d97bd03c5aa805cc508d89bb0675fabe3fb68f300eafe9294e0e2885b8859",
  name: "serverGuardAdmin",
  filename: "src/routes/admin.tsx"
}, (opts) => serverGuardAdmin.__executeServer(opts));
const serverGuardAdmin = createServerFn({
  method: "GET"
}).handler(serverGuardAdmin_createServerFn_handler, async () => {
  const {
    redirectUnlessAdmin
  } = await import("./guards.server-C3MGVjZd.js");
  await redirectUnlessAdmin();
});
export {
  serverGuardAdmin_createServerFn_handler
};
