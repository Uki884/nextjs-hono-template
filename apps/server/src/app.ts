export { app } from "./routes";
import { hc } from "hono/client";
import type { apiRoutes } from "./routes";

export type ApiType = typeof apiRoutes;

export const hcWithType = (...args: Parameters<typeof hc>) =>
  hc<typeof apiRoutes>(...args)