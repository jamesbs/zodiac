// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var lang$item_pb = require('./lang-item_pb.js');
var id_pb = require('./id_pb.js');

function serialize_Id(arg) {
  if (!(arg instanceof id_pb.Id)) {
    throw new Error('Expected argument of type Id');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_Id(buffer_arg) {
  return id_pb.Id.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_LangItem(arg) {
  if (!(arg instanceof lang$item_pb.LangItem)) {
    throw new Error('Expected argument of type LangItem');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_LangItem(buffer_arg) {
  return lang$item_pb.LangItem.deserializeBinary(new Uint8Array(buffer_arg));
}


var LangItemServiceService = exports.LangItemServiceService = {
  getById: {
    path: '/LangItemService/getById',
    requestStream: false,
    responseStream: false,
    requestType: id_pb.Id,
    responseType: lang$item_pb.LangItem,
    requestSerialize: serialize_Id,
    requestDeserialize: deserialize_Id,
    responseSerialize: serialize_LangItem,
    responseDeserialize: deserialize_LangItem,
  },
};

exports.LangItemServiceClient = grpc.makeGenericClientConstructor(LangItemServiceService);
