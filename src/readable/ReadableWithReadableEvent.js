'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is readable
class ReadableWithReadableEvent extends AsyncObject {

  constructor(stream, event) {
    super(stream, event);
  }

  // event is an Event with definedBody()
  definedSyncCall() {
    return (stream, event) => {
      stream.on('readable', event);
      return stream;
    }
  }

}

module.exports = ReadableWithReadableEvent;
