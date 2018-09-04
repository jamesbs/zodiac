import { data } from './data'
import { LangItem, Id } from '@zodiac/lang-item'

export function getById({ id }: Id): LangItem {
  return data[id]
}
