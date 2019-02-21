'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is writable
class WritableWithDefaultEncoding extends AsyncObject {
  constructor (stream, encoding) {
    super(stream, encoding)
  }

  syncCall () {
    return (stream, encoding) => {
      return stream.setDefaultEncoding(encoding)
    }
  }
}

module.exports = WritableWithDefaultEncoding
