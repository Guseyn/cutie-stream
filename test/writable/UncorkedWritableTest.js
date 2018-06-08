'use strict'

const { 
  Writable 
} = require('stream');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  Is
} = require('@guseyn/cutie-is')
const {
  UncorkedWritable
} = require('./../../index');
const CustomStream = require('./../CustomStream');

new Assertion(
  new Is(
    new UncorkedWritable(
      new CustomStream({})
    ), Writable
  )
).call();
