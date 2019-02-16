'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is writable
class DestroyedWritable extends AsyncObject {
  constructor (stream, error) {
    super(stream, error)
  }

  definedSyncCall () {
    return (stream, error) => {
      return stream.destroy(error)
    }
  }
}

module.exports = DestroyedWritable
