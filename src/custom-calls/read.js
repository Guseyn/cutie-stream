'use strict'

// Custom call to read data via 'readable' event and the readable.read() method
// https://nodejs.org/dist/latest-v8.x/docs/api/stream.html#stream_readable_read_size
const read = (stream, size, limit, callback) => {
  stream.on('readable', () => {
    if (limit) {
      callback(stream.read(size));
    } else {
      let buffers = [];
      let len;
      let chunk;
      while (null !== (chunk = stream.read(size))) {
        buffers.push(chunk);
        len += chunk.length;
      }
      callback(Buffer.concat(buffers, len));
    }
  });
}

module.exports = read;
