# cutie-stream

[![NPM Version][npm-image]][npm-url]

[Cutie](https://github.com/Guseyn/cutie) extension for <b>stream</b> module in Node. It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).


# Examples

You can find examples of using this library in the [test directory](https://github.com/Guseyn/cutie-stream/tree/master/test).

# Usage

```js
const {
  // Needed async objects here from the table below
} = require('@guseyn/cutie-stream');
```
For more information about parameters in the async objects visit [docs of Node](https://nodejs.org/en/docs/) for <b>stream</b> module.

## readable (here stream is readalbe)

| Async Object  | Async/sync call | Parameters(default value/description) | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| `DestroyedReadable` | `stream.destroy` | `stream, error` | `stream` |
| `IsPaused` | `stream.isPaused` | `stream` | `boolean` |
| `PausedReadable` | `stream.pause` | `stream` | `stream` |
| `PipedReadable` | `stream.pipe` | `stream, destination, options({end: true})` | `stream` |
| `ReadDataFromReadable` | [read](https://github.com/Guseyn/cutie-stream/blob/master/src/custom-calls/read.js) | `stream, size, limit(if true then it reads only the first chunk(with size as specified second argument), it's false by default)` | `string\|Buffer\|null` |
| `ReadableHighWaterMark` | `stream.readableHighWaterMark` | `stream` | `stream` |
| `ReadableWithCloseEvent` | `stream.on('close', event)` | `stream, event(Event with definedBody())` | `stream` |
| `ReadableWithDataEvent` | `stream.on('data', event)` | `stream, event(Event with definedBody(chunk))` | `stream` |
| `ReadableWithEncoding` | `stream.setEncoding` | `stream, encoding` | `stream` |
| `ReadableWithEndEvent` | `stream.on('end', event)` | `stream, event(Event with definedBody())` | `stream` |
| `ReadableWithErrorEvent` | `stream.on('error', event)` | `stream, event(Event with definedBody(error))` | `stream` |
| `ReadableWithReadableEvent` | `stream.on('readable', event)` | `stream, event(Event with definedBody())` | `stream` |
| `ResumedReadable` | `stream.resume` | `stream` | `stream` |
| `UnpipedReadable` | `stream.unpipe` | `stream, destination` | `stream` |
| `UnshiftedReadable` | `stream.unshift` | `stream, chunk` | `stream` |
| `WrappedReadable` | `stream.wrap` | `stream, oldStream` | `stream` |

## writable (here stream is writable)

| Async Object  | Async/sync call | Parameters(default value/description) | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| `CorkedWritable` | `stream.cork` | `stream` | `stream` |
| `DestroyedWritable` | `stream.destroy` | `stream, error` | `stream` |
| `EndedWritable` | `stream.end` | `stream, chunk, encoding` | `stream` |
| `UncorkedWritable` | `stream.uncork` | `stream` | `stream` |
| `WritableHighWaterMark` | `stream.readableHighWaterMark` | `stream` | `stream` |
| `WritableWithCloseEvent` | `stream.on('close', event)` | `stream, event(Event with definedBody())` | `stream` |
| `WritableWithDefaultEncoding` | `stream.setDefaultEncoding` | `stream, encoding` | `stream` |
| `WritableWithErrorEvent` | `stream.on('error', event)` | `stream, event(Event with definedBody(error))` | `stream` |
| `WritableWithFinishEvent` | `stream.on('finish', event)` | `stream, event(Event with definedBody())` | `stream` |
| `WritableWithOneTimeDrainEvent` | `stream.once('drain', event)` | `stream, event(Event with definedBody())` | `stream` |
| `WritableWithPipeEvent` | `stream.on('pipe', event)` | `stream, event(Event with definedBody(src))` | `stream` |
| `WritableWithUnpipeEvent` | `stream.on('unpipe', event)` | `stream, event(Event with definedBody(src))` | `stream` |
| `WrittenWritable` | `stream.write` | `stream, chunk, encoding` | `stream` |

[npm-image]: https://img.shields.io/npm/v/@guseyn/cutie-stream.svg
[npm-url]: https://npmjs.org/package/@guseyn/cutie-stream

