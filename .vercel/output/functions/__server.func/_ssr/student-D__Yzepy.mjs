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
  } = await import("./guards.server-Bm5uQI0K.mjs");
  await redirectUnlessUser();
});
export {
  serverGuardUser_createServerFn_handler
};
