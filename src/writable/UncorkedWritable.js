'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is writable
class UncorkedWritable extends AsyncObject {

  constructor(stream) {
    super(stream);
  }

  definedSyncCall() {
    return (stream) => {
      stream.uncork();
      return stream;
    }
  }

}

module.exports = UncorkedWritable;
