import { hc } from "@app/server";
import type { apiRoutes } from "@app/server/types";

export const hcWithType = (...args: Parameters<typeof hc>) =>
  hc<typeof apiRoutes>(...args);

export const apiClient = hcWithType(
  process.env.HOST || "http://localhost:3000/",
  {
    async fetch(input, requestInit, Env, executionCtx) {
      console.log("a", typeof window === "undefined");
      // MEMO: https://github.com/honojs/middleware/issues/483
      return fetch(input, {
        ...requestInit,
        ...(typeof window === "undefined"
          ? (await import("next/headers")).headers()
          : {}),
      });
    },
  },
);
