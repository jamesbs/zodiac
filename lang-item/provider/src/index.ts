import * as grpc from 'grpc'
import { LangItemService } from './service'

const proto = grpc.load('node_modules/@zodiac/lang-item-core/src/service.proto')

const server = new grpc.Server()

const startServer = () => {
  server.addService(
    proto.LangItemService.service,
    LangItemService)

  server.bind('0.0.0.0:11000', grpc.ServerCredentials.createInsecure())
  server.start()

  console.log('lang item provider started')
}

startServer()
