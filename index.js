const grpc = require('grpc');
const path = require('path');
const protoLoader = require('@grpc/proto-loader');

// Cargar las definiciones generadas
const PROTO_PATH = path.resolve(__dirname, 'data_explorer.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true });
const dataExplorerProto = grpc.loadPackageDefinition(packageDefinition);

// Dirección y puerto del servidor gRPC
const serverAddress = 'https://dev.heliotics.com';

// Crear un cliente gRPC
const client = new dataExplorerProto.DataExplorerGrpcService(serverAddress, grpc.credentials.createInsecure());

// Crear una solicitud para GetSensorDataStream
const getSensorDataRequest = {
  sensor_id: '17d88eca-5bbb-49e9-9da3-3329f0358059',
};

// Llamar al método GetSensorDataStream del servicio
const call = client.GetSensorDataStream(getSensorDataRequest);

// Manejar eventos de la transmisión
call.on('data', (sensorData) => {
  console.log('Received SensorData:', sensorData);
});

call.on('end', () => {
  console.log('Streaming ended');
});

call.on('error', (err) => {
  console.error('Error:', err);
});

call.on('status', (status) => {
  console.log('Status:', status);
});