#!/usr/bin/env node

const { readFileSync } = require('fs')
const { promisify } = require('util')
const { exec } = require('child_process')
const { join } = require('path')

const deps = JSON.parse(readFileSync(join(__dirname, './publish.json'), 'utf-8'))
const port = 4873

const main = async () => {
  try {
    console.log(`starting verdaccio on port ${port}`)
    promisify(exec)(
      `./node_modules/verdaccio/bin/verdaccio --config /verdaccio/conf/config.yaml --listen http://0.0.0.0:${port}`,
      { cwd: __dirname },
    )
  } catch(err) {
    console.log('error starting verdaccio server')
    console.log(err)
  }

  await promisify(setTimeout)(1000)

  deps.forEach(async depPath => {
    try {
      const installPath = join(__dirname, depPath)
      console.log(`installing node package ${installPath}`)

      await promisify(exec)(
        'yarn publish --non-interactive --registry http://localhost:4873',
        { cwd: installPath },
      )
    } catch(err) {
      console.log(`Error occured while trying to install ${depPath}`)
      console.log(err)
      process.exitCode = 1
    }
  })
}

main()
