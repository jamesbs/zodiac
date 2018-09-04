// package: 
// file: lang-item-service.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as lang_item_service_pb from "./lang-item-service_pb";
import * as lang_item_pb from "./lang-item_pb";
import * as id_pb from "./id_pb";

interface ILangItemServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getById: ILangItemServiceService_IgetById;
}

interface ILangItemServiceService_IgetById extends grpc.MethodDefinition<id_pb.Id, lang_item_pb.LangItem> {
    path: string; // "/.LangItemService/getById"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<id_pb.Id>;
    requestDeserialize: grpc.deserialize<id_pb.Id>;
    responseSerialize: grpc.serialize<lang_item_pb.LangItem>;
    responseDeserialize: grpc.deserialize<lang_item_pb.LangItem>;
}

export const LangItemServiceService: ILangItemServiceService;

export interface ILangItemServiceServer {
    getById: grpc.handleUnaryCall<id_pb.Id, lang_item_pb.LangItem>;
}

export interface ILangItemServiceClient {
    getById(request: id_pb.Id, callback: (error: Error | null, response: lang_item_pb.LangItem) => void): grpc.ClientUnaryCall;
    getById(request: id_pb.Id, metadata: grpc.Metadata, callback: (error: Error | null, response: lang_item_pb.LangItem) => void): grpc.ClientUnaryCall;
    getById(request: id_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: lang_item_pb.LangItem) => void): grpc.ClientUnaryCall;
}

export class LangItemServiceClient extends grpc.Client implements ILangItemServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getById(request: id_pb.Id, callback: (error: Error | null, response: lang_item_pb.LangItem) => void): grpc.ClientUnaryCall;
    public getById(request: id_pb.Id, metadata: grpc.Metadata, callback: (error: Error | null, response: lang_item_pb.LangItem) => void): grpc.ClientUnaryCall;
    public getById(request: id_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: lang_item_pb.LangItem) => void): grpc.ClientUnaryCall;
}
