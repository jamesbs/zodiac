import { Example } from '../example/example';

export type LangItem = {
  id: string
  chinese: string
  pinyin: string
  english: string[]
  examples: Example[]
}
