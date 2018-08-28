import { Language } from './language'

export type Translation<T extends Language, U extends Language> =
    T
  & {
      [K in keyof U]: U[K] | U[K][]
    }
