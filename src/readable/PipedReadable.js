'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is readable
class PipedReadable extends AsyncObject {
  constructor (stream, destination, options) {
    super(stream, destination, options || {
      end: true
    })
  }

  definedSyncCall () {
    return (stream, destination, options) => {
      return stream.pipe(destination, options)
    }
  }
}

module.exports = PipedReadable
