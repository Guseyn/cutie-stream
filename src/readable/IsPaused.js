'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is boolean
class IsPaused extends AsyncObject {

  constructor(stream) {
    super(stream);
  }

  definedSyncCall() {
    return (stream) => {
      return stream.isPaused();
    }
  }

}

module.exports = IsPaused;
