import { Hono } from "hono";
import { examples, examples2 } from "./examples";

export const app = new Hono().basePath("/api");
export const apiRoutes = app.route(...examples).route(...examples2);
