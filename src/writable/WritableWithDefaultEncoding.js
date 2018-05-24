'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is writable
class WritableWithDefaultEncoding extends AsyncObject {

  constructor(stream, encoding) {
    super(stream, encoding);
  }

  definedSyncCall() {
    return (stream, encoding) => {
      return stream.setDefaultEncoding(encoding);
    }
  }

}

module.exports = WritableWithDefaultEncoding;