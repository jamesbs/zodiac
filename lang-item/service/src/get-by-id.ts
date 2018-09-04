import { data } from './data'
import { LangItem, Id, Example } from '@zodiac/lang-item'

export function getById(id: Id): LangItem {
  const result = data[id.getId()]

  const langItem = new LangItem()


  langItem.setId(result.id)
  langItem.setChinese(result.chinese)
  langItem.setPinyin(result.pinyin)
  result.english.forEach(e => langItem.addEnglish(e))
  result.examples.forEach(e => {
    const example = new Example()
    example.setChinese(e.chinese)
    example.setPinyin(e.pinyin)
    example.setEnglish(e.english)
    langItem.addExamples(example)
  })

  return langItem
}
