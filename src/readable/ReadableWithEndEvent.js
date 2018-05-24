'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is readable
class ReadableWithEndEvent extends AsyncObject {

  constructor(stream, event) {
    super(stream, event);
  }

  // event is an Event with definedBody()
  definedSyncCall() {
    return (stream, event) => {
      stream.on('end', event);
      return stream;
    }
  }

}

module.exports = ReadableWithEndEvent;
