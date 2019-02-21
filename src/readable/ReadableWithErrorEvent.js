'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is readable
class ReadableWithErrorEvent extends AsyncObject {
  constructor (stream, event) {
    super(stream, event)
  }

  // event is an Event with body(error)
  syncCall () {
    return (stream, event) => {
      stream.on('error', event)
      return stream
    }
  }
}

module.exports = ReadableWithErrorEvent
