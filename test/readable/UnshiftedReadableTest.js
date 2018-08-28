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
  UnshiftedReadable
} = require('./../../index');
const CustomStream = require('./../CustomStream');

new Assertion(
  new Is(
    new UnshiftedReadable(
      new CustomStream({}),
      'chunk'
    ), Readable
  )
).call();
