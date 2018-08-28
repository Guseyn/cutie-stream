'use strict'

const { 
  Readable 
} = require('stream');
const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is')
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
