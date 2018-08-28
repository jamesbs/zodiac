import { data } from './data'
import { LangItem } from './lang-item'

export function getById({ id }: { id: string }): LangItem {
  const result = data[id]

  return { id: result.id }
}
