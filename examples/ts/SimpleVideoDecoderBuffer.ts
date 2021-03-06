import omx = require('openmax');
import stream = require('stream');
import fs = require('fs');

class WritableFilter extends stream.Writable {
  constructor() {
    super();
  }
  _write(chunk, enc, next) {
    console.log('_write length', chunk.length, chunk);
    next();
    if (chunk.onBufferDone) {
      chunk.onBufferDone();
    }
  };
}

var VideoDecode: omx.VideoDecode;
var ws = new WritableFilter();

VideoDecode = new omx.VideoDecode();
VideoDecode.init()
  .then(function() {
    VideoDecode.setVideoPortFormat(omx.OMX_VIDEO_CODINGTYPE.OMX_VIDEO_CodingAVC);

    fs.createReadStream("../../spec/data/video-LQ.h264")
      .pipe(VideoDecode)
      .pipe(ws)
      .on('finish', function() {
        console.log("Done");
        process.exit();
      });
  });
