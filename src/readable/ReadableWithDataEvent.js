'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is readable
class ReadableWithDataEvent extends AsyncObject {

  constructor(stream, event) {
    super(stream, event);
  }

  // event is an Event with definedBody(chunk)
  definedSyncCall() {
    return (stream, event) => {
      stream.on('data', event);
      return stream;
    }
  }

}

module.exports = ReadableWithDataEvent;
