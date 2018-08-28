export type ChineseStandard = {
  chinese: string
  pinyin: string
}

export const isChineseStandard = (subject: any) =>
     typeof subject.chinese === 'string'
  && typeof subject.pinyin === 'string'
