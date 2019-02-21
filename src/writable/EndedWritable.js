'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is writable
class EndedWritable extends AsyncObject {
  constructor (stream, chunk, encoding) {
    super(stream, chunk, encoding)
  }

  asyncCall () {
    return (stream, chunk, encoding, callback) => {
      this.stream = stream
      stream.end(chunk, encoding, callback)
    }
  }

  onResult () {
    return this.stream
  }
}

module.exports = EndedWritable
