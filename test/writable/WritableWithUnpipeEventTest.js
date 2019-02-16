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
  WritableWithUnpipeEvent
} = require('./../../index')
const CustomStream = require('./../CustomStream')

class UnpipeEvent extends Event {
  constructor () {
    super()
  }

  definedBody () {
    // handle
  }
}

new Assertion(
  new Is(
    new WritableWithUnpipeEvent(
      new CustomStream({}), new UnpipeEvent()
    ), Writable
  )
).call()
