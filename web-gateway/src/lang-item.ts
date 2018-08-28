import { langItemServiceUrl } from './config'
import * as grpc from 'grpc'

const langItemProto = grpc.load('../lang-item/service/src/service.proto')

const langItemClient = new langItemProto.LangItemService(
  langItemServiceUrl,
  grpc.credentials.createInsecure()
)

export function getLangItem({ id }: { id: string }) {
  return new Promise((resolve, reject) => {
    langItemClient.getById({ id }, (err, response) => {
      console.log('res?', response)
      if(err) {
        reject(err)
      } else {
        resolve(response)
      }
    })
  })
}
