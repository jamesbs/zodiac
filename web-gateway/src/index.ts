import { buildSchema } from 'graphql'
import { print } from 'graphql/language/printer'
import * as Koa from 'koa'
import * as mount from 'koa-mount'
const koaGraphQL = require('koa-graphql')

import * as schema from './schema.graphql'

const p = print(schema)
const s = buildSchema(p)
const r = {
  getLangItem: () => ({
    id: '1',
  }),
}

const app = new Koa()

app.use(mount('/', koaGraphQL({
  schema: s,
  rootValue: r,
  graphiql: true,
})))

app.listen(5000)
console.log('listening to localhost:5000')
