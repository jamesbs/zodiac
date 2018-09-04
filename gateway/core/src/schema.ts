import { buildSchema } from 'graphql'
import { readFileSync } from 'fs'
import { join } from 'path'

export const schema = buildSchema(
  readFileSync(
    join(__dirname, './schema.graphql'),
    'utf8',
  ))

