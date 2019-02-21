'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is writable
class UncorkedWritable extends AsyncObject {
  constructor (stream) {
    super(stream)
  }

  syncCall () {
    return (stream) => {
      stream.uncork()
      return stream
    }
  }
}

module.exports = UncorkedWritable
