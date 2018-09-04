import { Server, ServerCredentials } from 'grpc'
import { LangItemServiceImplementation } from './lang-item-service-implementation'
import { LangItemServiceService } from '@zodiac/lang-item'

const server = new Server()

const startServer = () => {
  server.addService(
    LangItemServiceService,
    LangItemServiceImplementation)

  server.bind('0.0.0.0:11000', ServerCredentials.createInsecure())
  server.start()

  console.log('lang item provider started')
}

startServer()
