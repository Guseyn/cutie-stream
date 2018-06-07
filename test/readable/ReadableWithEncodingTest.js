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
