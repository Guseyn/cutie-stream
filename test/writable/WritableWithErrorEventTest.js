'use strict'

const { 
  Writable 
} = require('stream');
const {
  Event
} = require('@guseyn/cutie');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  Is
} = require('@guseyn/cutie-is')
const {
  WritableWithErrorEvent
} = require('./../../index');
const CustomStream = require('./../CustomStream');

class ErrorEvent extends Event {

  constructor() {
    super();
  }

  definedBody(error) {
    // handle
  }

}

new Assertion(
  new Is(
    new WritableWithErrorEvent(
      new CustomStream({}), new ErrorEvent()
    ), Writable
  )
).call();
