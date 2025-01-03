import { Hono } from "hono";
import { ExampleUsecases } from "../../usecases/example";

export const exampleRoutes = new Hono()
	.get("/", async (c) => {
		const result = await ExampleUsecases.index();
		return c.json({ result: result });
	})
	.post("/", (c) => c.json({ result: "create an example" }, 201))
	.get("/:id", (c) => c.json({ result: `get ${c.req.param("id")}` }));

