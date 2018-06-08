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
  WritableWithUnpipeEvent
} = require('./../../index');
const CustomStream = require('./../CustomStream');

class UnpipeEvent extends Event {

  constructor() {
    super();
  }

  definedBody(error) {
    // handle
  }

}

new Assertion(
  new Is(
    new WritableWithUnpipeEvent(
      new CustomStream({}), new UnpipeEvent()
    ), Writable
  )
).call();
