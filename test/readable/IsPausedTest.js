'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsBoolean
} = require('@cuties/is')
const {
  IsPaused
} = require('./../../index')
const CustomStream = require('./../CustomStream')

new Assertion(
  new IsBoolean(
    new IsPaused(
      new CustomStream({})
    )
  )
).call()
