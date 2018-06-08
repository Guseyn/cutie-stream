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
  WrittenWritable
} = require('./../../index');
const CustomStream = require('./../CustomStream');

new Assertion(
  new Is(
    new WrittenWritable(
      new CustomStream({}), 'chunk'
    ), Writable
  )
).call();
