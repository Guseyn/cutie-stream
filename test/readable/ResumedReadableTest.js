'use strict'

const { 
  Readable 
} = require('stream');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  Is
} = require('@guseyn/cutie-is')
const {
  ResumedReadable
} = require('./../../index');
const CustomStream = require('./../CustomStream');

new Assertion(
  new Is(
    new ResumedReadable(
      new CustomStream({})
    ), Readable
  )
).call();
