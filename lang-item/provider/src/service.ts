import { getById } from './get-by-id'
import { passThroughRequest } from './pass-through-request'

export const LangItemService = {
  getById: passThroughRequest(getById),
}
