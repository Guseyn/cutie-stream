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
