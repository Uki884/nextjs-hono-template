import Credentials from "@auth/core/providers/credentials";
import { authHandler, initAuthConfig, verifyAuth } from "@hono/auth-js";
import { Hono } from "hono";
import { env } from "hono/adapter";
import { exampleRoutes } from "./example";

export const app = new Hono();

app.use(
  "*",
  initAuthConfig((c) => {
    const { AUTH_SECRET } = env<{ AUTH_SECRET: string }>(c);
    return {
      secret: AUTH_SECRET,
      providers: [
        Credentials({
          credentials: {
            username: { label: "Username" },
            password: { label: "Password", type: "password" },
          },
          async authorize({ username, password }) {
            console.log("username", username, password);
            if (username === "admin" && password === "admin") {
              return { id: "admin", username: "admin" };
            }
            throw new Error("Invalid credentials");
          },
        }),
      ],
      pages: {
        signIn: "/signin",
        error: "/error",
      },
    };
  }),
);

app.use("/api/auth/*", authHandler());

app.use("/api/*", verifyAuth());

export const apiRoutes = app.basePath("/api").route("/examples", exampleRoutes);
