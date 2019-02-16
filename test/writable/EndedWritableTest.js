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
  EndedWritable
} = require('./../../index')
const CustomStream = require('./../CustomStream')

new Assertion(
  new Is(
    new EndedWritable(
      new CustomStream({}), 'chunk'
    ), Writable
  )
).call()
