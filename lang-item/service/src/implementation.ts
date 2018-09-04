import { getById } from './get-by-id'
import { passThroughRequest } from './pass-through-request'
import { LangItemService } from '@zodiac/lang-item'

export const LangItemServiceImplementation = {
  getById: passThroughRequest(getById),
}
