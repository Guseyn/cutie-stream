'use strict'

const {
  Event
} = require('@cuties/cutie');
const { 
  Readable 
} = require('stream');
const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is')
const {
  DestroyedReadable,
  ReadableWithErrorEvent
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
    new DestroyedReadable(
      new ReadableWithErrorEvent(
        new CustomStream({}), new ErrorEvent()
      ), new Error('just destroyed')
    ), Readable
  )
).call();
