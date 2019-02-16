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
  ReadableWithEndEvent
} = require('./../../index')
const CustomStream = require('./../CustomStream')

class EndEvent extends Event {
  constructor () {
    super()
  }

  definedBody () {
    // handle
  }
}

new Assertion(
  new Is(
    new ReadableWithEndEvent(
      new CustomStream({}), new EndEvent()
    ), Readable
  )
).call()
