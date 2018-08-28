import { Pinyin, isPinyin } from './pinyin'

export type ChineseExpanded = {
  chinese: string
  pinyin: Pinyin
}

export const isChineseExpanded = (language: any): language is ChineseExpanded =>
     typeof language.chinese === 'string'
  && isPinyin(language.pinyin)
