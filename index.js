const grpc = require('grpc');
const protobuf = require('protobufjs');
const root = protobuf.loadSync('data_explorer.js');

const GetSensorDataRequest = root.lookupType('CollectIOT.Api.Explorer.Protos.GetSensorDataRequest');
const SensorData = root.lookupType('CollectIOT.Api.Explorer.Protos.SensorData');

const grpcServerAddress = 'https://dev.heliotics.com';

// gRPC client
const client = new proto.DataExplorerGrpcService(grpcServerAddress, grpc.credentials.createInsecure());

const sensorId = '17d88eca-5bbb-49e9-9da3-3329f0358059';
llectIOT.Api.Explorer.Protos

// GetSensorDataRequest request
const requestMessage = GetSensorDataRequest.create({
  sensor_id: sensorId,
});

client.GetSensorDataStream(requestMessage, (error, response) => {
  if (error) {
    console.error('Error:', error);
  } else {
    const sensorData = SensorData.toObject(response, { defaults: true });
    console.log('Sensor information:', sensorData);
  }
});
