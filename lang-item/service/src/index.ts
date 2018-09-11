import { Server, ServerCredentials } from 'grpc'

import { LangItemServiceImplementation } from './implementation'
import { LangItemServiceDefinition } from '@zodiac/lang-item'

const server = new Server()

const startServer = () => {
  server.addService(
    LangItemServiceDefinition,
    LangItemServiceImplementation,
  )

  server.bind('0.0.0.0:80', ServerCredentials.createInsecure())
  server.start()

  console.log('lang item provider started')
}

startServer()
