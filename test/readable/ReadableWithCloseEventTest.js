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
  ReadableWithCloseEvent
} = require('./../../index');
const CustomStream = require('./../CustomStream');

class CloseEvent extends Event {

  constructor() {
    super();
  }

  definedBody(error) {
    // handle
  }

}

new Assertion(
  new Is(
    new ReadableWithCloseEvent(
      new CustomStream({}), new CloseEvent()
    ), Readable
  )
).call();
