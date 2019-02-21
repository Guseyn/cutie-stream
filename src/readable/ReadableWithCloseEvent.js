'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is readable
class ReadableWithCloseEvent extends AsyncObject {
  constructor (stream, event) {
    super(stream, event)
  }

  // event is an Event with body()
  syncCall () {
    return (stream, event) => {
      stream.on('close', event)
      return stream
    }
  }
}

module.exports = ReadableWithCloseEvent
