const { createReadStream, createWriteStream, existsSync, mkdirSync } = require('fs')
const { resolve, join } = require('path')

const srcPath = './src'
const outPath = './dist'

const protoFiles = [
  'example.proto',
  'id.proto',
  'lang-item-service.proto',
  'lang-item.proto',
]

const fullSrcPath = resolve(__dirname, srcPath)
const fullOutPath = resolve(__dirname, outPath)

if(!existsSync(fullOutPath))
  mkdirSync(fullOutPath)

protoFiles.forEach(file => {
  createReadStream(join(fullSrcPath, file))
    .pipe(createWriteStream(join(fullOutPath, file)))
})
