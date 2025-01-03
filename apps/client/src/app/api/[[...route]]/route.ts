import { app } from "../../../../../server/src/app";
import { handle } from "@app/server";

export const runtime = "edge";

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);
export const PATCH = handle(app);
