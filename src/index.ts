import { Hono } from 'hono'

const app = new Hono()

app.get('/', async (c) => {  
  return c.text('Hello Hono! get')
})


app.post('/', async (c) => {
  console.log(await c.req.json())
  console.log(c.req.header("Authorization"))
  console.log(c.req.query("param"))

  return c.text('Hello Hono!')
})

export default app
