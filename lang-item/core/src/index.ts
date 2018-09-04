import * as grpc from 'grpc'
import { join } from 'path'
import { LangItemService } from './lang-item-service'
import { LangItemServiceClient } from './lang-item-service-client'

export { Id } from './id'
export { Example }  from './example'
export { LangItem } from './lang-item'
export { LangItemService, LangItemServiceClient }

const proto = grpc.load(join(__dirname, './lang-item-service.proto'))

export const createLangItemServiceClient = (...args) => new proto.LangItemService(...args) as LangItemServiceClient

export const LangItemServiceDefinition = proto.LangItemService.service as grpc.ServiceDefinition<LangItemService>
