import { Chinese, isChinese } from './chinese/chinese'
import { English, isEnglish } from './english'

export type Language = Chinese | English

export const isLanguage = (subject: any): subject is Language =>
  isChinese(subject) || isEnglish(subject)
