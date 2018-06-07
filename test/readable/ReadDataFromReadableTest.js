'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  Is
} = require('@guseyn/cutie-is')
const {
  ReadDataFromReadable
} = require('./../../index');
const CustomStream = require('./../CustomStream');

new Assertion(
  new Is(
    new ReadDataFromReadable(
      new CustomStream({}, ['1', '2', '3'])
    ), Buffer
  )
).call();
