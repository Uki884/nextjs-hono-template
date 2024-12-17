import { Hono } from "hono";

export const route = new Hono()
  .get('/', (c) => c.json({ result: 'list examples' }))
  .post('/', (c) => c.json({ result: 'create an example' }, 201))
  .get('/:id', (c) => c.json({ result: `get ${c.req.param('id')}` }))

export const examples = ['/examples', route] as const;


