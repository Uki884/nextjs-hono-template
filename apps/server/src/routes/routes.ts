import { authHandler, verifyAuth } from "@hono/auth-js";
import { Hono } from "hono";
import { except } from "hono/combine";
import { authMiddleware } from "../middlewares/auth.middleware";
import { authRoutes } from "./auth";
import { exampleRoutes } from "./example";

export const app = new Hono();

const exceptRoutes = ["/api/auth/signUp"];

app.use("*", authMiddleware);

app.use("/api/auth/*", except(exceptRoutes, authHandler()));

app.use("/api/*", except(exceptRoutes, verifyAuth()));

export const apiRoutes = app
  .basePath("/api")
  .route("/examples", exampleRoutes)
  .route("/auth", authRoutes);
