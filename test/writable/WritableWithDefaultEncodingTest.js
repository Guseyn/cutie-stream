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
  WritableWithDefaultEncoding
} = require('./../../index');
const CustomStream = require('./../CustomStream');

new Assertion(
  new Is(
    new WritableWithDefaultEncoding(
      new CustomStream({}), 'utf8'
    ), Writable
  )
).call();
