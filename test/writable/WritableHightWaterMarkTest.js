'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsNumber
} = require('@cuties/is')
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
