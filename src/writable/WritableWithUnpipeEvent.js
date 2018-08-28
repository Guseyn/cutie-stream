'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is writable
class WritableWithUnpipeEvent extends AsyncObject {

  constructor(stream, event) {
    super(stream, event);
  }

  // event is an Event with definedBody(src), src is Readable
  definedSyncCall() {
    return (stream, event) => {
      stream.on('unpipe', event);
      return stream;
    }
  }

}

module.exports = WritableWithUnpipeEvent;
