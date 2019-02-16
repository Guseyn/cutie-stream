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
  WritableWithFinishEvent
} = require('./../../index')
const CustomStream = require('./../CustomStream')

class FinishEvent extends Event {
  constructor () {
    super()
  }

  definedBody () {
    // handle
  }
}

new Assertion(
  new Is(
    new WritableWithFinishEvent(
      new CustomStream({}), new FinishEvent()
    ), Writable
  )
).call()
