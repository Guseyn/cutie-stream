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
  ReadableWithReadableEvent
} = require('./../../index')
const CustomStream = require('./../CustomStream')

class ReadableEvent extends Event {
  constructor () {
    super()
  }

  body () {
    // handle
  }
}

new Assertion(
  new Is(
    new ReadableWithReadableEvent(
      new CustomStream({}), new ReadableEvent()
    ), Readable
  )
).call()
