'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is writable
class EndWritable extends AsyncObject {

  constructor(stream, chunk, encoding) {
    super(stream, chunk, encoding);
  }

  definedAsyncCall() {
    return (stream, chunk, encoding, callback) => {
      this.stream = stream;
      stream.end(chunk, encoding, callback);
    }
  }

  onResult() {
    return this.stream;
  }

}

module.exports = EndWritable;
