import { hc } from "@app/server";
import { apiRoutes } from "@app/server/types";

export const hcWithType = (...args: Parameters<typeof hc>) =>
  hc<typeof apiRoutes>(...args);

export const apiClient = hcWithType(process.env.HOST || "http://localhost:3000/");
