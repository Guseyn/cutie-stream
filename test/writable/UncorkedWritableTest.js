'use strict'

const {
  Writable
} = require('stream')
const {
  Assertion
} = require('@cuties/assert')
const {
  Is
} = require('@cuties/is')
const {
  UncorkedWritable
} = require('./../../index')
const CustomStream = require('./../CustomStream')

new Assertion(
  new Is(
    new UncorkedWritable(
      new CustomStream({})
    ), Writable
  )
).call()
