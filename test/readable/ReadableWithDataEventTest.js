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
  ReadableWithDataEvent
} = require('./../../index');
const CustomStream = require('./../CustomStream');

class DataEvent extends Event {

  constructor() {
    super();
  }

  definedBody(chunk) {
    // handle
  }

}

new Assertion(
  new Is(
    new ReadableWithDataEvent(
      new CustomStream({}), new DataEvent()
    ), Readable
  )
).call();
