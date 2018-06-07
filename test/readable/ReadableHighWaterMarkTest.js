'use strict'

const { 
  Readable 
} = require('stream');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is')
const {
  ReadableHighWaterMark
} = require('./../../index');
const CustomStream = require('./../CustomStream');

new Assertion(
  new IsNumber(
    new ReadableHighWaterMark(
      new CustomStream({})
    )
  )
).call();
