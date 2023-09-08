const { defineConfig } = require("cypress");

module.exports = defineConfig({
      video : false,
      chromeWebSecurity : false,
  e2e: {
      setupNodeEvents(on, config) {
       
      }
    }
  })
        

