import * as fastify from 'fastify'
import * as fastifyStatic from 'fastify-static'
import { join } from 'path'
import { stat } from 'fs'
import { promisify } from 'util'
import { parse } from 'url'
import { key, cert } from './https'
const minimist = require('minimist')
const options = minimist(process.argv.slice(2))

const server = fastify({
  http2: true,
  https: {
    key,
    cert,
  },
  logger: true,
})

const staticRoot = join(__dirname, '../../dist')

server.register(fastifyStatic, {
  root: staticRoot,
  serve: false,
})

server.get('*', async (request, reply) => {
  const requestPath = request.params['*']
  const filePath = join(staticRoot, requestPath)
  try {
    const fileExists = (await promisify(stat)(filePath)).isFile()
    ;(reply as any).sendFile(fileExists ? requestPath : 'index.html')
  } catch {
    ;(reply as any).sendFile('index.html')
  }
})

const main = async ({ port }: { port: number }) => {
  try {
    await server.listen(port, '0.0.0.0')
    server.log.info(`server listening on port ${port}`)
  } catch(err) {
    server.log.error(err)
    process.exitCode = 1
  }
}

main({
  port: options.port || 8080
})

