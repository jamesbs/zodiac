import { LangItem } from '@zodiac/core';

export type Query = {
  getLangItem: (args: { id: string }) => LangItem | Promise<LangItem>
}
