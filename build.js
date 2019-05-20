const { exec } = require('child_process')
const { promisify } = require('util')
const { join } = require('path')
const { writeFile, readFile, copy } = require('fs-extra')

const nodeDeps = [
  'gateway/core',
  'lang-item/core',
]
const depsPath = 'deps'
const nodePath = 'node'

Promise.all(nodeDeps.map(async path => {
  const packagePath = join(__dirname, path)
  const package = JSON.parse(await readFile(join(packagePath, 'package.json')))
  const targetPath = join(__dirname, depsPath, nodePath, package.name)

  try {
    await promisify(exec)('yarn build', { cwd: packagePath })
    await copy(join(packagePath, 'dist'), targetPath)

    console.log(`Built and copied ${package.name}.`)
  } catch(err) {
    console.error(err)
    process.exitCode = 1
  }
  return join(nodePath, package.name)
})).then(async deps => {
  try{
    await promisify(writeFile)(join(__dirname, depsPath, 'publish.json'), JSON.stringify(deps))
  } catch(err) {
    console.log(err)
    process.exitCode = 1
  }
})
