import { langItemServiceUrl } from './config'
import * as grpc from 'grpc'
import { LangItem as CoreLangItem } from '@zodiac/core'
import {
  Id,
  LangItem as ServiceLangItem,
  LangItemServiceClient,
} from '@zodiac/lang-item'


const langItemClient = new LangItemServiceClient(
  langItemServiceUrl,
  grpc.credentials.createInsecure()
)

export function getLangItem({ id }: { id: string }) {
  return new Promise<CoreLangItem>((resolve, reject) => {
    const requestId = new Id()
    requestId.setId(id)

    langItemClient.getById(requestId, (err, response: ServiceLangItem) => {
      if(err) {
        reject(err)
      } else {
        const result = response.toObject()
        const r2: CoreLangItem = {
          id: result.id,
          chinese: result.chinese,
          pinyin: result.pinyin,
          english: result.englishList,
          examples: result.examplesList,
        }

        resolve(r2)
      }
    })
  })
}
