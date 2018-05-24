'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is writable
class WritableWithOneTimeDrainEvent extends AsyncObject {

  constructor(stream, event) {
    super(stream, event);
  }

  // event is an Event with definedBody()
  definedSyncCall() {
    return (stream, event) => {
      stream.once('drain', event);
      return stream;
    }
  }

}

module.exports = WritableWithOneTimeDrainEvent;
