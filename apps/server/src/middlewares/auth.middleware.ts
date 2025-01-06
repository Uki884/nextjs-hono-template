import Credentials from "@auth/core/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { initAuthConfig } from "@hono/auth-js";
import { env } from "hono/adapter";
import { prismaClient } from "../lib/prisma/client";

export const authMiddleware = initAuthConfig((c) => {
  const { AUTH_SECRET } = env<{ AUTH_SECRET: string }>(c);
  return {
    secret: AUTH_SECRET,
    adapter: PrismaAdapter(prismaClient),
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
