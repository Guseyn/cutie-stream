module.exports = {

  DestroyedReadable: require('./src/readable/DestroyedReadable'),
  IsPaused: require('./src/readable/IsPaused'),
  PausedReadable: require('./src/readable/PausedReadable'),
  PipedReadable: require('./src/readable/PipedReadable'),
  ReadableHighWaterMark: require('./src/readable/ReadableHighWaterMark'),
  ReadableWithCloseEvent: require('./src/readable/ReadableWithCloseEvent'),
  ReadableWithDataEvent: require('./src/readable/ReadableWithDataEvent'),
  ReadableWithEncoding: require('./src/readable/ReadableWithEncoding'),
  ReadableWithEndEvent: require('./src/readable/ReadableWithEndEvent'),
  ReadableWithErrorEvent: require('./src/readable/ReadableWithErrorEvent'),
  ReadableWithReadableEvent: require('./src/readable/ReadableWithReadableEvent'),
  ReadDataFromReadable: require('./src/readable/ReadDataFromReadable'),
  ResumedReadable: require('./src/readable/ResumedReadable'),
  UnpipedReadable: require('./src/readable/UnpipedReadable'),
  UnshiftedReadable: require('./src/readable/UnshiftedReadable'),
  WrappedReadable: require('./src/readable/WrappedReadable'),

  CorkedWritable: require('./src/writable/CorkedWritable'),
  DestroyedWritable: require('./src/writable/DestroyedWritable'),
  EndWritable: require('./src/writable/EndWritable'),
  UncorkedWritable: require('./src/writable/UncorkedWritable'),
  WritableHighWaterMark: require('./src/writable/WritableHighWaterMark'),
  WritableWithCloseEvent: require('./src/writable/WritableWithCloseEvent'),
  WritableWithDefaultEncoding: require('./src/writable/WritableWithCloseEvent'),
  WritableWithErrorEvent: require('./src/writable/WritableWithErrorEvent'),
  WritableWithFinishEvent: require('./src/writable/WritableWithFinishEvent'),
  WritableWithOneTimeDrainEvent: require('./src/writable/WritableWithOneTimeDrainEvent'),
  WritableWithPipeEvent: require('./src/writable/WritableWithPipeEvent'),
  WritableWithUnpipeEvent: require('./src/writable/WritableWithUnpipeEvent'),
  WrittenWritable: require('./src/writable/WrittenWritable')

}
