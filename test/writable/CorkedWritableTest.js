'use strict'

const { 
  Writable 
} = require('stream');
const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is')
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
