import * as grpc from 'grpc'
import { LangItemService } from './service'

const proto = grpc.load('src/service.proto')

const server = new grpc.Server()

const startServer = () => {
  server.addService(
    proto.LangItemService.service,
    {
      getById: passThroughRequest(getById),
    })

  server.bind('0.0.0.0:11000', grpc.ServerCredentials.createInsecure())
  server.start()

  console.log('started service')
}

startServer()
