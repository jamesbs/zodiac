export type Tone = '1' | '2' | '3' | '4' | '5'

export const tones = new Set<Tone>(['1', '2', '3', '4', '5'])

export const isTone = (tone: string): tone is Tone =>
  tones.has(tone as Tone)
