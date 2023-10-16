# Protobuf Demo

## Compile Protobuf

- `npm install`
- `npm bin grpc-tools`
- `npm run compile:proto`
- `npx grpc_tools_node_protoc --js_out=import_style=commonjs,binary:. --grpc_out=. --plugin=protoc-gen-grpc={CONFIG_ABSOLUTE_PATH}/.bin/grpc_tools_node_protoc_plugin data_explorer.proto`
- `node index.js`
