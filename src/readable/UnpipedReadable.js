'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is readable
class UnpipedReadable extends AsyncObject {

  constructor(stream, destination) {
    super(stream, destination);
  }

  definedSyncCall() {
    return (stream, destination) => {
      return stream.unpipe(destination);
    }
  }

}

module.exports = UnpipedReadable;
