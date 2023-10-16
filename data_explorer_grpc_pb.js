// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var data_explorer_pb = require('./data_explorer_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_GetPaginatedDataRequest(arg) {
  if (!(arg instanceof data_explorer_pb.GetPaginatedDataRequest)) {
    throw new Error('Expected argument of type GetPaginatedDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetPaginatedDataRequest(buffer_arg) {
  return data_explorer_pb.GetPaginatedDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetSensorDataRequest(arg) {
  if (!(arg instanceof data_explorer_pb.GetSensorDataRequest)) {
    throw new Error('Expected argument of type GetSensorDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetSensorDataRequest(buffer_arg) {
  return data_explorer_pb.GetSensorDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PaginatedDataResponse(arg) {
  if (!(arg instanceof data_explorer_pb.PaginatedDataResponse)) {
    throw new Error('Expected argument of type PaginatedDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PaginatedDataResponse(buffer_arg) {
  return data_explorer_pb.PaginatedDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SensorData(arg) {
  if (!(arg instanceof data_explorer_pb.SensorData)) {
    throw new Error('Expected argument of type SensorData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SensorData(buffer_arg) {
  return data_explorer_pb.SensorData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SubscribeSensorMessage(arg) {
  if (!(arg instanceof data_explorer_pb.SubscribeSensorMessage)) {
    throw new Error('Expected argument of type SubscribeSensorMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SubscribeSensorMessage(buffer_arg) {
  return data_explorer_pb.SubscribeSensorMessage.deserializeBinary(new Uint8Array(buffer_arg));
}


var DataExplorerGrpcServiceService = exports.DataExplorerGrpcServiceService = {
  getSensorDataStream: {
    path: '/DataExplorerGrpcService/GetSensorDataStream',
    requestStream: false,
    responseStream: true,
    requestType: data_explorer_pb.GetSensorDataRequest,
    responseType: data_explorer_pb.SensorData,
    requestSerialize: serialize_GetSensorDataRequest,
    requestDeserialize: deserialize_GetSensorDataRequest,
    responseSerialize: serialize_SensorData,
    responseDeserialize: deserialize_SensorData,
  },
  getPaginatedSensorData: {
    path: '/DataExplorerGrpcService/GetPaginatedSensorData',
    requestStream: false,
    responseStream: false,
    requestType: data_explorer_pb.GetPaginatedDataRequest,
    responseType: data_explorer_pb.PaginatedDataResponse,
    requestSerialize: serialize_GetPaginatedDataRequest,
    requestDeserialize: deserialize_GetPaginatedDataRequest,
    responseSerialize: serialize_PaginatedDataResponse,
    responseDeserialize: deserialize_PaginatedDataResponse,
  },
  subscribeSensor: {
    path: '/DataExplorerGrpcService/SubscribeSensor',
    requestStream: false,
    responseStream: true,
    requestType: data_explorer_pb.SubscribeSensorMessage,
    responseType: data_explorer_pb.SensorData,
    requestSerialize: serialize_SubscribeSensorMessage,
    requestDeserialize: deserialize_SubscribeSensorMessage,
    responseSerialize: serialize_SensorData,
    responseDeserialize: deserialize_SensorData,
  },
};

exports.DataExplorerGrpcServiceClient = grpc.makeGenericClientConstructor(DataExplorerGrpcServiceService);
