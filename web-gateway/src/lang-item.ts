import { langItemServiceUrl } from './config'
import * as grpc from 'grpc'

const langItemProto = grpc.load('../lang-item/service/src/service.proto')

const langItemClient = new langItemProto.LangItemService(
  langItemServiceUrl,
  grpc.credentials.createInsecure()
)

langItemClient.getById({ id: '1' }, (err, response) => {
  if(err) {
    console.log('error!')
    console.log(err)
  } else {
    console.log('response:', JSON.parse(response))
  }
})
