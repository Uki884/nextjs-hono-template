import { Hono } from "hono";
import { ExampleUsecases } from "../../usecases/example";

export const indexRoute = new Hono().get("/", async (c) => {
  console.log("indexRoute", c.get("authUser"));
  const result = await ExampleUsecases.index();
  return c.json({ result: result });
});
