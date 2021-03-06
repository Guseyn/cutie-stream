'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is readable
class PausedReadable extends AsyncObject {
  constructor (stream) {
    super(stream)
  }

  syncCall () {
    return (stream) => {
      return stream.pause()
    }
  }
}

module.exports = PausedReadable
