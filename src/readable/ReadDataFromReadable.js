'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Custom call to read data via 'readable' event and the readable.read() method
const read = require('./../custom-calls/read');

// Represented result is string | Buffer | null
class ReadDataFromReadable extends AsyncObject {

  constructor(stream, size, limit) {
    super(stream, size || undefined, limit || false);
  }

  definedAsyncCall() {
    return read;
  }

  callbackWithError() {
    return false;
  }

}

module.exports = ReadDataFromReadable;
