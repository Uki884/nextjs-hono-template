import { hc } from "@app/server";
import type { apiRoutes } from "@app/server/types";
import { headers } from "next/headers";

export const hcWithType = (...args: Parameters<typeof hc>) =>
	hc<typeof apiRoutes>(...args);

export const apiClient = hcWithType(
	process.env.HOST || "http://localhost:3000/",
	{
		async fetch(input, requestInit, Env, executionCtx) {
			// MEMO: https://github.com/honojs/middleware/issues/483
			return fetch(input, {
				...requestInit,
				...(typeof window === "undefined" ? await headers() : {}),
			});
		},
	},
);
