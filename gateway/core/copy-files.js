const { createReadStream, createWriteStream, existsSync, mkdirSync } = require('fs')
const { resolve, join } = require('path')

const basePath = './src'
const outPath = './dist'

const files = [
  'schema.graphql',
]

const fullBasePath = resolve(__dirname, basePath)
const fullOutPath = resolve(__dirname, outPath)

if(!existsSync(fullOutPath))
  mkdirSync(fullOutPath)

files.forEach(file => {
  createReadStream(join(fullBasePath, file))
    .pipe(createWriteStream(join(fullOutPath, file)))
})
