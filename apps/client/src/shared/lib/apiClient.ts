import { hcWithType } from "@app/server";

export const apiClient = hcWithType(process.env.HOST || "http://localhost:3000/");
