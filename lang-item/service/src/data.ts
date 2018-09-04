import { readFileSync } from 'fs'
import { resolve } from 'path'

const db = JSON.parse(
  readFileSync(
    resolve(__dirname, './db.json'),
    'utf8',
  )
);

type DataItem = {
  id: string
  chinese: string
  pinyin: string
  english: string[]
  examples: {
    chinese: string
    pinyin: string
    english: string
  }[]
}

export const data: { [key: string]: DataItem } = db.reduce(
  (set, unit) => {
    set[unit.id] = unit;
    return set;
  },
  <{ [key: string]: DataItem }>{});
