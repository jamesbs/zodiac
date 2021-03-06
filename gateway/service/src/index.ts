import * as Koa from 'koa'
import * as mount from 'koa-mount'
import * as cors from '@koa/cors'

const koaGraphQL = require('koa-graphql')

import { resolver } from './resolver'
import { schema } from '@zodiac/gateway'

const app = new Koa()
app.use(cors())
app.use(mount(
  '/',
  koaGraphQL({
    schema,
    rootValue: resolver,
    graphiql: true,
  })
))

app.listen(80)

console.log(`gateway service started`)
