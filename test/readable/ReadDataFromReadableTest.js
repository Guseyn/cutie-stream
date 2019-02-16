'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  Is
} = require('@cuties/is')
const {
  ReadDataFromReadable
} = require('./../../index')
const CustomStream = require('./../CustomStream')

new Assertion(
  new Is(
    new ReadDataFromReadable(
      new CustomStream({}, ['1', '2', '3'])
    ), Buffer
  )
).call()

new Assertion(
  new Is(
    new ReadDataFromReadable(
      new CustomStream({}, ['1', '2', '3']), 1, 1
    ), Buffer
  )
).call()
