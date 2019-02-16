'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is readable
class UnshiftedReadable extends AsyncObject {
  constructor (stream, chunk) {
    super(stream, chunk)
  }

  definedSyncCall () {
    return (stream, chunk) => {
      stream.unshift(chunk)
      return stream
    }
  }
}

module.exports = UnshiftedReadable
