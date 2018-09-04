import { Example } from './example'

export type LangItem = {
  id: string
  chinese: string
  pinyin: string
  english: string[]
  examples: Example[]
}
