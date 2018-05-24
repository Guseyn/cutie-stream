'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

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
