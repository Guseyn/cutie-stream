'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is writable
class CorkedWritable extends AsyncObject {

  constructor(stream) {
    super(stream);
  }

  definedSyncCall() {
    return (stream) => {
      stream.cork();
      return stream;
    }
  }

}

module.exports = CorkedWritable;