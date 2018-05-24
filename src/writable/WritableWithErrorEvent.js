'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is writable
class WritableWithErrorEvent extends AsyncObject {

  constructor(stream, event) {
    super(stream, event);
  }

  // event is an Event with definedBody(error)
  definedSyncCall() {
    return (stream, event) => {
      stream.on('error', errorEvent);
      return stream;
    }
  }

}

module.exports = WritableWithErrorEvent;