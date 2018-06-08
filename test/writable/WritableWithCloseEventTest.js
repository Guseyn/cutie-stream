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
  WritableWithCloseEvent
} = require('./../../index');
const CustomStream = require('./../CustomStream');

class CloseEvent extends Event {

  constructor() {
    super();
  }

  definedBody() {
    // handle
  }

}

new Assertion(
  new Is(
    new WritableWithCloseEvent(
      new CustomStream({}), new CloseEvent()
    ), Writable
  )
).call();
