import { Tone, isTone } from './tone'

export type Pinyin = Readonly<{
  syllable: string
  tone: Tone
}>

export const isPinyin = (subject: any): subject is Pinyin =>
     typeof subject.syllable === 'string'
  && isTone(subject.tone)
