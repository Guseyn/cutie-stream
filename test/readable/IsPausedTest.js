'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsBoolean
} = require('@guseyn/cutie-is')
const {
  IsPaused
} = require('./../../index');
const CustomStream = require('./../CustomStream');

new Assertion(
  new IsBoolean(
    new IsPaused(
      new CustomStream({})
    )
  )
).call();
