import { authHandler, verifyAuth } from "@hono/auth-js";
import { Hono } from "hono";
import { authMiddleware } from "../middlewares/auth.middleware";
import { exampleRoutes } from "./example";

const app = new Hono();

app.use("*", authMiddleware);

app.use("/api/auth/*", authHandler());

app.use("/api/*", verifyAuth());

export const apiRoutes = app.basePath("/api").route("/examples", exampleRoutes);
