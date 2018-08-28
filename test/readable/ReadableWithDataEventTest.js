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
