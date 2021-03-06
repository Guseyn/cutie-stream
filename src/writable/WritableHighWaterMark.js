'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number
class WritableHighWaterMark extends AsyncObject {
  constructor (stream) {
    super(stream)
  }

  syncCall () {
    return (stream) => {
      return stream.writableHighWaterMark
    }
  }
}

module.exports = WritableHighWaterMark
