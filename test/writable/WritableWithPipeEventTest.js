'use strict'

const {
  Writable
} = require('stream')
const {
  Event
} = require('@cuties/cutie')
const {
  Assertion
} = require('@cuties/assert')
const {
  Is
} = require('@cuties/is')
const {
  WritableWithPipeEvent
} = require('./../../index')
const CustomStream = require('./../CustomStream')

class PipeEvent extends Event {
  constructor () {
    super()
  }

  definedBody () {
    // handle
  }
}

new Assertion(
  new Is(
    new WritableWithPipeEvent(
      new CustomStream({}), new PipeEvent()
    ), Writable
  )
).call()
