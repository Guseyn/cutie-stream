'use strict'

// Custom call to avoid memory issues using the 'drain' event
// based on https://nodejs.org/dist/latest-v8.x/docs/api/stream.html#stream_writable_write_chunk_encoding_callback
const write = (stream, chunk, encoding, callback) => {
  if (!stream.write(chunk, encoding)) {
    stream.once('drain', callback);
  } else {
    process.nextTick(callback);
  }
}

module.exports = write;
