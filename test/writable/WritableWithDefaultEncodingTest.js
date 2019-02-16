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
  WritableWithDefaultEncoding
} = require('./../../index')
const CustomStream = require('./../CustomStream')

new Assertion(
  new Is(
    new WritableWithDefaultEncoding(
      new CustomStream({}), 'utf8'
    ), Writable
  )
).call()
