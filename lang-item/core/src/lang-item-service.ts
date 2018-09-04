import { LangItem } from './lang-item'
import { Id } from './id'
import { handleUnaryCall } from 'grpc'

export type LangItemService = {
  getById: handleUnaryCall<Id, LangItem>
}
