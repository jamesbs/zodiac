import { readFileSync } from 'fs'
import { resolve } from 'path'
import { LangItem } from './lang-item'

const db = JSON.parse(
  readFileSync(
      resolve(__dirname, '../db.json'),
      'utf8',
  )
);


export const data: { [key: string]: LangItem } = db.reduce(
  (set, unit) => {
      set[unit.id] = unit;
      return set;
  },
  <{ [key: string]: LangItem }>{});
