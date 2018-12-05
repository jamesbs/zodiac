const { readFileSync, writeFileSync } = require('fs')
const { join } = require('path')

const packageSource = JSON.parse(readFileSync('./package.json', 'utf-8'))

const {
  name,
  version,
  description,
  author,
  license,
  repository,
  dependencies,
} = packageSource

const packageInfo = {
  name,
  version,
  description,
  main: 'index.js',
  author,
  license,
  repository,
  dependencies,
}

try {
  writeFileSync(join(__dirname, 'dist/package.json'), JSON.stringify(packageInfo))
} catch(error) {
  console.error('Error while writing package.json!')
  console.error(error)
  process.exitCode = 1
}
