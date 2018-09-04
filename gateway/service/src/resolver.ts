import { getLangItem } from './lang-item'
import { Query } from './query'

export const resolver: Query = {
  getLangItem,
  // : ({ id }: { id: string} ) => {
  //   console.log('resolving id', id)
  //   return ({
  //   id,
  //   chinese: "chinese",
  //   pinyin: "pinyin",
  //   english: ["english"],
  //   examples: [],
  //   })
  // },
}
