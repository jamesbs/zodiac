import { Identifiable, Translation, Language } from '@zodiac/core'

export type LangItem<T extends Language = Language, U extends Language = Language> =
    Identifiable
  & Translation<T, U>
  & {
      examples: Translation<T, U>[]
    }
