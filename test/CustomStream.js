const { Duplex } = require('stream');

class CustomStream extends Duplex {
  
  constructor(options, store) {
    super(options);
    this.store = store || [];
  }

  _write(chunk, encoding, callback) {
    this.store.push(chunk);
    if (!chunk) {
      callback(new Error('chunk is invalid'));
    } else {
      callback();
    }
  }

  _read(size, encoding) {
    if (size < 0) {
      process.nextTick(() => this.emit('error', err));
      return;
    }
    this.push(Buffer.from(this.store.splice(0, size), encoding));
  }

}

module.exports = CustomStream;
