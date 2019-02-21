'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is writable
class WritableWithPipeEvent extends AsyncObject {
  constructor (stream, event) {
    super(stream, event)
  }

  // event is an Event with body(src), src is Readable
  syncCall () {
    return (stream, event) => {
      stream.on('pipe', event)
      return stream
    }
  }
}

module.exports = WritableWithPipeEvent
