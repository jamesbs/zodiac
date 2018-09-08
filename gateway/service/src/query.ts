import { LangItem } from '@zodiac/lang-item';

export type Query = {
  getLangItem: (args: { id: string }) => LangItem | Promise<LangItem>
}
