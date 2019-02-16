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
  WritableWithCloseEvent
} = require('./../../index')
const CustomStream = require('./../CustomStream')

class CloseEvent extends Event {
  constructor () {
    super()
  }

  definedBody () {
    // handle
  }
}

new Assertion(
  new Is(
    new WritableWithCloseEvent(
      new CustomStream({}), new CloseEvent()
    ), Writable
  )
).call()
