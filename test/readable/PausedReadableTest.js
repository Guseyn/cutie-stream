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
  PausedReadable
} = require('./../../index');
const CustomStream = require('./../CustomStream');

new Assertion(
  new Is(
    new PausedReadable(
      new CustomStream({})
    ), Readable
  )
).call();
