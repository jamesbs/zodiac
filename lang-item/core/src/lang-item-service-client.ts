import { Client, sendUnaryData } from 'grpc'
import { Id } from './id'
import { LangItem } from './lang-item'

export type LangItemServiceClient =
    Client
  & {
      getById: (id: Id, handler: sendUnaryData<LangItem>) => void
    }
