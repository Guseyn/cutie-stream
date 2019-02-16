'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is readable
class ReadableWithEncoding extends AsyncObject {
  constructor (stream, encoding) {
    super(stream, encoding)
  }

  definedSyncCall () {
    return (stream, encoding) => {
      return stream.setEncoding(encoding)
    }
  }
}

module.exports = ReadableWithEncoding
