const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrl: "https://api.tech-global-training.com/students",
    oracleDB: {
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      connectionString: process.env.DB_HOST,
    },
    e2e: {
      setupNodeEvents(on, config) {
        // implement node event listeners here
      },
    },
  },

  baseUrl: process.env.BASE_URL,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
