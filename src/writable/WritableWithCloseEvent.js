'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is writable
class WritableWithCloseEvent extends AsyncObject {

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

module.exports = WritableWithCloseEvent;
