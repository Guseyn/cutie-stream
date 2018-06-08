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
  CorkedWritable
} = require('./../../index');
const CustomStream = require('./../CustomStream');

new Assertion(
  new Is(
    new CorkedWritable(
      new CustomStream({})
    ), Writable
  )
).call();
