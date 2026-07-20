import { c as createServerRpc } from "./createServerRpc-Q-WznjGe.mjs";
import { c as createServerFn } from "./server-Bh35ipan.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
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
  } = await import("./guards.server-Bm5uQI0K.mjs");
  await redirectUnlessAdmin();
});
export {
  serverGuardAdmin_createServerFn_handler
};
