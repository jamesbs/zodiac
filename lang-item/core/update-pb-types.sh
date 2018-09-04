#! /bin/bash

# Directory to write generated code to (.js and .d.ts files)
OUT_DIR="./src"

protoc \
    --proto_path="./src" \
    --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="${OUT_DIR}" \
    id.proto example.proto lang-item.proto service.proto
