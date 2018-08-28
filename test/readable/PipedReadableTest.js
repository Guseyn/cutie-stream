'use strict'

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
