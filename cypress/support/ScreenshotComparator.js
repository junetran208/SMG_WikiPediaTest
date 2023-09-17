import pixelmatch from 'pixelmatch';
import fs from 'fs';
import { PNG } from 'pngjs'; 

class ScreenshotComparator {
  constructor() {}

  compareScreenshots(capturedScreenshot, expectedScreenshot) {
    const captured = PNG.sync.read(fs.readFileSync(capturedScreenshot));
    const expected = PNG.sync.read(fs.readFileSync(expectedScreenshot));
    const diff = new PNG({ width: captured.width, height: captured.height });
    const numDiffPixels = pixelmatch(
      captured.data,
      expected.data,
      diff.data,
      captured.width,
      captured.height,
      {
        threshold: 0.1, 
      }
    );

    return numDiffPixels === 0;
  }
}

module.exports = ScreenshotComparator;
