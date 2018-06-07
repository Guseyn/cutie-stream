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
  ReadableWithEndEvent
} = require('./../../index');
const CustomStream = require('./../CustomStream');

class EndEvent extends Event {

  constructor() {
    super();
  }

  definedBody() {
    // handle
  }

}

new Assertion(
  new Is(
    new ReadableWithEndEvent(
      new CustomStream({}), new EndEvent()
    ), Readable
  )
).call();
