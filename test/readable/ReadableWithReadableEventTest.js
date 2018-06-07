'use strict'

const {
  Event
} = require('@guseyn/cutie');
const { 
  Readable 
} = require('stream');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  Is
} = require('@guseyn/cutie-is')
const {
  ReadableWithReadableEvent
} = require('./../../index');
const CustomStream = require('./../CustomStream');

class ReadableEvent extends Event {

  constructor() {
    super();
  }

  definedBody() {
    // handle
  }

}

new Assertion(
  new Is(
    new ReadableWithReadableEvent(
      new CustomStream({}), new ReadableEvent()
    ), Readable
  )
).call();
