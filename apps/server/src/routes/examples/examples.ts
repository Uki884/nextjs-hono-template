import { Hono } from "hono";

export const route = new Hono()
	.get("/", (c) => c.json({ result: { hoge: "example response" } }))
	.post("/", (c) => c.json({ result: "create an example" }, 201))
	.get("/:id", (c) => c.json({ result: `get ${c.req.param("id")}` }));

export const route2 = new Hono()
	.get("/", (c) => c.json({ result: "list examples" }))
	.post("/", (c) => c.json({ result: "create an example" }, 201))
	.get("/:id", (c) => c.json({ result: `get ${c.req.param("id")}` }));

export const examples = ["/examples", route] as const;

export const examples2 = ["/examples2", route2] as const;
