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
