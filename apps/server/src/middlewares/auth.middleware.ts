import Credentials from "@auth/core/providers/credentials";
import { initAuthConfig } from "@hono/auth-js";
import { env } from "hono/adapter";

export const authMiddleware = initAuthConfig((c) => {
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
});
