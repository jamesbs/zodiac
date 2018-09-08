import { langItemServiceUrl } from './config'
import * as grpc from 'grpc'
import {
  LangItem,
  createLangItemServiceClient,
} from '@zodiac/lang-item'


const langItemClient = createLangItemServiceClient(
  langItemServiceUrl,
  grpc.credentials.createInsecure()
)

export function getLangItem({ id }: { id: string }) {
  return new Promise<LangItem>((resolve, reject) => {
    langItemClient.getById({ id } as any, (err, response: LangItem) => {
      if(err) {
        reject(err)
      } else {
        resolve(response)
      }
    })
  })
}
