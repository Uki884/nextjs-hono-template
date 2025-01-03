import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

export const newRoute = new Hono()
	.post("/", zValidator(
		'form',
    z.object({
      title: z.string(),
      body: z.string(),
    })
  ), (c) => c.json({ result: "create an example" }, 201))


