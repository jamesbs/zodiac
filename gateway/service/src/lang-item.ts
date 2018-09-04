import { langItemServiceUrl } from './config'
import * as grpc from 'grpc'
import { LangItem as CoreLangItem } from '@zodiac/core'
import {
  LangItem as ServiceLangItem,
  createLangItemServiceClient,
} from '@zodiac/lang-item'


const langItemClient = createLangItemServiceClient(
  langItemServiceUrl,
  grpc.credentials.createInsecure()
)

export function getLangItem({ id }: { id: string }) {
  return new Promise<CoreLangItem>((resolve, reject) => {
    langItemClient.getById({ id } as any, (err, response: ServiceLangItem) => {
      if(err) {
        reject(err)
      } else {
        resolve(response)
      }
    })
  })
}
