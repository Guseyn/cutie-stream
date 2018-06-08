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
  WritableWithFinishEvent
} = require('./../../index');
const CustomStream = require('./../CustomStream');

class FinishEvent extends Event {

  constructor() {
    super();
  }

  definedBody(error) {
    // handle
  }

}

new Assertion(
  new Is(
    new WritableWithFinishEvent(
      new CustomStream({}), new FinishEvent()
    ), Writable
  )
).call();
