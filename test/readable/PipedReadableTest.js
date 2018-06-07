'use strict'

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
  PipedReadable
} = require('./../../index');
const CustomStream = require('./../CustomStream');

new Assertion(
  new Is(
    new PipedReadable(
      new CustomStream({}),
      new CustomStream({})
    ), Readable
  )
).call();
