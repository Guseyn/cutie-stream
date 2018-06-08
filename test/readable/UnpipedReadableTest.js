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
  UnpipedReadable
} = require('./../../index');
const CustomStream = require('./../CustomStream');

new Assertion(
  new Is(
    new UnpipedReadable(
      new CustomStream({}),
      new CustomStream({})
    ), Readable
  )
).call();
