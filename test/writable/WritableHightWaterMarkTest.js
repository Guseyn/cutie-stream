'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is')
const {
  WritableHighWaterMark
} = require('./../../index');
const CustomStream = require('./../CustomStream');

new Assertion(
  new IsNumber(
    new WritableHighWaterMark(
      new CustomStream({})
    )
  )
).call();
