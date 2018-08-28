export type English = {
  english: string
}

export const isEnglish = (language: any): language is English => typeof language === 'string'
