
import * as Koa from 'koa'
import * as mount from 'koa-mount'
const koaGraphQL = require('koa-graphql')

import { resolver } from './resolver'
import { schema } from './schema'

const app = new Koa()

app.use(mount(
  '/',
  koaGraphQL({
    schema,
    rootValue: resolver,
    graphiql: true,
  })
))

app.listen(5000)

console.log(`gateway started on port 5000`)
