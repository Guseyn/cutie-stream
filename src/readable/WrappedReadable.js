'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is readable
class WrappedReadable extends AsyncObject {

  constructor(stream, oldStream) {
    super(stream, oldStream);
  }

  definedSyncCall() {
    return (stream, oldStream) => {
      stream.wrap(oldStream);
      return stream;
    }
  }

}

module.exports = WrappedReadable;
