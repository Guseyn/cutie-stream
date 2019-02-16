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
  WritableWithOneTimeDrainEvent
} = require('./../../index')
const CustomStream = require('./../CustomStream')

class DrainEvent extends Event {
  constructor () {
    super()
  }

  definedBody () {
    // handle
  }
}

new Assertion(
  new Is(
    new WritableWithOneTimeDrainEvent(
      new CustomStream({}), new DrainEvent()
    ), Writable
  )
).call()
