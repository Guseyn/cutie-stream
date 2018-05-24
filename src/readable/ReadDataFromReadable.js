'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is string | Buffer | null
class ReadDataFromReadable extends AsyncObject {

  constructor(stream, size) {
    super(stream, size);
  }

  definedSyncCall() {
    return (stream, size) => {
      return stream.read(size);
    }
  }

}

module.exports = ReadDataFromReadable;
