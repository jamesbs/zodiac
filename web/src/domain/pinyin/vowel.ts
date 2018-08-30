export type Vowel = 'a' | 'e' | 'i' | 'o' | 'u' | 'v'

export const vowels = new Set<Vowel>([ 'a', 'e', 'i', 'o', 'u', 'v' ] as Vowel[])

export function isPriorityVowel(letter: string): letter is Vowel {
  return letter === 'a'
      || letter === 'e'
}

export function isVowel(letter: string): letter is Vowel {
  return vowels.has(letter as Vowel)
}
