'use strict'

const { 
  Writable 
} = require('stream');
const {
  Event
} = require('@cuties/cutie');
const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is')
const {
  DestroyedWritable,
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
    new DestroyedWritable(
      new WritableWithErrorEvent(
        new CustomStream({}), new ErrorEvent()
      ), new Error('just destroyed')
    ), Writable
  )
).call();
