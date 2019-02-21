'use strict'

const {
  Event
} = require('@cuties/cutie')
const {
  Readable
} = require('stream')
const {
  Assertion
} = require('@cuties/assert')
const {
  Is
} = require('@cuties/is')
const {
  ReadableWithErrorEvent
} = require('./../../index')
const CustomStream = require('./../CustomStream')

class ErrorEvent extends Event {
  constructor () {
    super()
  }

  body (/* error */) {
    // handle error
  }
}

new Assertion(
  new Is(
    new ReadableWithErrorEvent(
      new CustomStream({}), new ErrorEvent()
    ), Readable
  )
).call()
