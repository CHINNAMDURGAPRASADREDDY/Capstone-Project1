const { defineConfig } = require("cypress");
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      addMatchImageSnapshotPlugin(on);
    },

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports', 
    overwrite: false, 
    html: true,
    json: false, 
    reportFilename: 'test-report', 
    timestamp: 'mmddyyyy_HHMMss' 
  },

  screenshotOnRunFailure: true, 
    screenshotsFolder: 'cypress/screenshots', 
   
}
});
