'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is writable
class WritableWithOneTimeDrainEvent extends AsyncObject {
  constructor (stream, event) {
    super(stream, event)
  }

  // event is an Event with body()
  syncCall () {
    return (stream, event) => {
      stream.once('drain', event)
      return stream
    }
  }
}

module.exports = WritableWithOneTimeDrainEvent
