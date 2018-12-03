const { exec } = require('child_process')
const { promisify } = require('util')
const { join } = require('path')
const { readFile, copy } = require('fs-extra')

const nodeDeps = [
  'gateway/core',
  'lang-item/core',
]
const depsPath = 'deps'
const nodePath = 'node'
nodeDeps.forEach(async path => {
  try {
    const packagePath = join(__dirname, path)
    const package = JSON.parse(await readFile(join(packagePath, 'package.json')))

    const res = await promisify(exec)('yarn build', { cwd: packagePath })
    console.log(res.stdout)

    const move = await copy(join(packagePath, 'dist'), join(__dirname, depsPath, nodePath, package.name))

    console.log(`Built and copied ${package.name}.`)
  } catch(err) {
    console.error(err)
    process.exitCode = 1
  }
})
