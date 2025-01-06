import { Hono } from "hono";

import { signUpRoute } from "./signUp.route";

export const authRoutes = new Hono().route("/signUp", signUpRoute);
