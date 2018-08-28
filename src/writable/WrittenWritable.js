'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Custom call to avoid memory issues using the 'drain' event
const write = require('./../custom-calls/write');

// Represented result is writable
class WrittenWritable extends AsyncObject {

  constructor(stream, chunk, encoding) {
    super(stream, chunk, encoding || undefined);
  }

  definedAsyncCall() {
    return (stream, chunk, encoding, callback) => {
      this.stream = stream;
      write(stream, chunk, encoding, callback);
    }
  }

  onResult() {
    return this.stream;
  }

}

module.exports = WrittenWritable;
