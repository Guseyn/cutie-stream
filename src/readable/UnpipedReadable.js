'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is readable
class UnpipedReadable extends AsyncObject {
  constructor (stream, destination) {
    super(stream, destination)
  }

  syncCall () {
    return (stream, destination) => {
      return stream.unpipe(destination)
    }
  }
}

module.exports = UnpipedReadable
