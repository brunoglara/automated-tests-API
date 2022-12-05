exports.config = {
  output: './output',
  helpers: {
    REST: {
      endpoint: 'https://api.yelp.com/v3',
      defaultHeaders: {
        'Authorization': 'Bearer r6dGmxHCH2cd4TxeEB_KDDP1ZcGKIxvZEEZ1Y07ZTj1JZosjMwAWnBj80WW-q_NzcitoIgrlCMV-pXllKa5LAd_Aw2vEo11rApe8u_r_kmuVgKksykgqZoEIU6fQYnYx',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    },
    JSONResponse: {}
  },
  include: {
    I: './steps_file.js'
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