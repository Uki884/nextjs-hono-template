import { Hono } from "hono";
import { examples } from "./examples";

export const app = new Hono().basePath("/api");
export const apiRoutes = app.route(...examples);

