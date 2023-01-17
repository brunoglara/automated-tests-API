require('dotenv').config()

exports.config = {
  output: './output',
  helpers: {
    REST: {
      endpoint: 'https://api.yelp.com/v3',
      defaultHeaders: {
        'Authorization': `Bearer ${process.env.API_SECRET_KEY}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    },
    JSONResponse: {}
  },
  include: {
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
    pattern: 'wait.*',
    timeout: 0
  },
  {
    pattern: 'amOnPage',
    timeout: 0
  }
  ],
  name: 'API'
}