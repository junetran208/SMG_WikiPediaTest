
const { defineConfig } = require("cypress");
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
     },
     specPattern: "./cypress/e2e/**.*",
     baseUrl: "https://en.wikipedia.org",
     
  },
});

// const { defineConfig } = require("cypress");
// const ScreenshotComparator = require('./cypress/support/ScreenshotComparator');

// module.exports = (on, config) => {
//   const screenshotComparator = new ScreenshotComparator();

//   on('task', {
//     compareScreenshots: ({ capturedScreenshot, expectedScreenshot }) => {
//       return screenshotComparator.compareScreenshots(capturedScreenshot, expectedScreenshot);
//     },
//   });

//   return defineConfig({
//     e2e: {
//       setupNodeEvents(on, config) {
//         // implement node event listeners here
//       },
//       specPattern: "./cypress/e2e/**.*",
//       baseUrl: "https://en.wikipedia.org",
//     },
//    
//   });
// };
