import { hc } from "hono/client";
import type { apiRoutes } from "./routes";

export type ApiType = typeof apiRoutes;

export const hcWithType = (...args: Parameters<typeof hc>) =>
  hc<typeof apiRoutes>(...args)

export { handle } from "hono/vercel";

export { app } from "./routes";
export type { InferResponseType } from "hono";
export type { ClientResponse } from "hono/client";