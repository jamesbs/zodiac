import { langItemServiceUrl } from './config'
import * as grpc from 'grpc'

const langItemProto = grpc.load('node_modules/@zodiac/lang-item-core/src/service.proto')

const langItemClient = new langItemProto.LangItemService(
  langItemServiceUrl,
  grpc.credentials.createInsecure()
)

export function getLangItem({ id }: { id: string }) {
  return new Promise((resolve, reject) => {
    langItemClient.getById({ id }, (err, response) => {
      if(err) {
        reject(err)
      } else {
        resolve(response)
      }
    })
  })
}
