import type { ApiType } from "@/api/app";
import { hc } from "hono/client";

export const apiClient = hc<ApiType>(process.env.HOST || "http://localhost:3000/");
