'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

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
