#!/usr/bin/env node

const { exec: execCb } = require('child_process')
const { promisify } = require('util')

const exec = promisify(execCb)

const main = async () => {
  try {
    await exec('yarn')
    await exec('yarn start')
  } catch(err) {
    console.log('err')
  }
}
