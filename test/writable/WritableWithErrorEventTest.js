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
