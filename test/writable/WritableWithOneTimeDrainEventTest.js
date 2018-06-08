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
  WritableWithOneTimeDrainEvent
} = require('./../../index');
const CustomStream = require('./../CustomStream');

class DrainEvent extends Event {

  constructor() {
    super();
  }

  definedBody(error) {
    // handle
  }

}

new Assertion(
  new Is(
    new WritableWithOneTimeDrainEvent(
      new CustomStream({}), new DrainEvent()
    ), Writable
  )
).call();
