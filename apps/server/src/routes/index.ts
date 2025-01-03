import { Hono } from "hono";
import { exampleRoutes } from "./example";

export const app = new Hono().basePath("/api");

export const apiRoutes = app.route("/examples", exampleRoutes);
