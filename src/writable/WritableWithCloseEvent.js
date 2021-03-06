'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is writable
class WritableWithCloseEvent extends AsyncObject {
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

module.exports = WritableWithCloseEvent
