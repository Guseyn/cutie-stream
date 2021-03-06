'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is readable
class ResumedReadable extends AsyncObject {
  constructor (stream) {
    super(stream)
  }

  syncCall () {
    return (stream) => {
      return stream.resume()
    }
  }
}

module.exports = ResumedReadable
