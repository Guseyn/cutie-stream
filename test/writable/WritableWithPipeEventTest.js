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
  WritableWithPipeEvent
} = require('./../../index');
const CustomStream = require('./../CustomStream');

class PipeEvent extends Event {

  constructor() {
    super();
  }

  definedBody(error) {
    // handle
  }

}

new Assertion(
  new Is(
    new WritableWithPipeEvent(
      new CustomStream({}), new PipeEvent()
    ), Writable
  )
).call();
