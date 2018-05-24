'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is number
class WritableHighWaterMark extends AsyncObject {

  constructor(stream) {
    super(stream);
  }

  definedSyncCall() {
    return (stream) => {
      return stream.writableHighWaterMark;
    }
  }

}

module.exports = WritableHighWaterMark;
