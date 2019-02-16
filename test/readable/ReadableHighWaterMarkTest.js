'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsNumber
} = require('@cuties/is')
const {
  ReadableHighWaterMark
} = require('./../../index')
const CustomStream = require('./../CustomStream')

new Assertion(
  new IsNumber(
    new ReadableHighWaterMark(
      new CustomStream({})
    )
  )
).call()
