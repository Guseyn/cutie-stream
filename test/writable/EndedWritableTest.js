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
  EndedWritable
} = require('./../../index');
const CustomStream = require('./../CustomStream');

new Assertion(
  new Is(
    new EndedWritable(
      new CustomStream({}), 'chunk'
    ), Writable
  )
).call();
