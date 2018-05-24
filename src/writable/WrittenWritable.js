'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Custom call to avoid memory issues using the 'drain' event
const write = require('./../custom-calls/write');

// Represented result is writable | boolean
/*  
  If it's boolean(always false), then the stream wishes for the calling code
  to wait for the 'drain' event to be emitted before continuing to write additional data;
  otherwise it's writable. 
*/
class WrittenWritable extends AsyncObject {

  constructor(stream, chunk, encoding) {
    super(stream, chunk, encoding || undefined);
  }

  definedAsyncCall() {
    return (stream, chunk, encoding, callback) => {
      this.stream = stream;
      write(stream, chunk, encoding, callback);
    }
  }

  onResult() {
    return this.stream;
  }

}

module.exports = WrittenWritable;
