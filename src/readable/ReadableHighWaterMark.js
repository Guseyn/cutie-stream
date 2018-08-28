'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is number
class ReadableHighWaterMark extends AsyncObject {

  constructor(stream) {
    super(stream);
  }

  definedSyncCall() {
    return (stream) => {
      return stream.readableHighWaterMark;
    }
  }

}

module.exports = ReadableHighWaterMark;
