'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is boolean
class IsPaused extends AsyncObject {
  constructor (stream) {
    super(stream)
  }

  syncCall () {
    return (stream) => {
      return stream.isPaused()
    }
  }
}

module.exports = IsPaused
