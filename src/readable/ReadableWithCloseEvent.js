'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is readable
class ReadableWithCloseEvent extends AsyncObject {

  constructor(stream, event) {
    super(stream, event);
  }

  // event is an Event with definedBody()
  definedSyncCall() {
    return (stream, event) => {
      stream.on('close', event);
      return stream;
    }
  }

}

module.exports = ReadableWithCloseEvent;