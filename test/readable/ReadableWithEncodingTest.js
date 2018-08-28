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
  ReadableWithEncoding
} = require('./../../index');
const CustomStream = require('./../CustomStream');

new Assertion(
  new Is(
    new ReadableWithEncoding(
      new CustomStream({}), 'utf8'
    ), Readable
  )
).call();
