module.exports = {
  testURL: 'http://localhost',
  rootDir: '../../',
  bail: false,
  verbose: true,
  collectCoverage: false,
  reporters: [
    'default',
    [
      '<rootDir>tools/jest/reporters/json.js',
      {
        output: '<rootDir>coverage/report.json',
      },
    ],
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
  coverageReporters: ['html', 'json', 'lcov', 'text-summary', 'cobertura'],
  coverageDirectory: '<rootDir>coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/config/',
    '/tools/',
    '/build/',
    '/.vsts/',
    '/coverage/',
    '/public/',
    '/mocks/',
    '/__mocks__/',
    // REMOVED AFTER ADDRESS PANEL IS COMPLETED
    '/src/components/organisms/AddressDetailsPanel/',
  ],
  snapshotSerializers: ['<rootDir>/node_modules/enzyme-to-json/serializer'],
  modulePaths: ['<rootDir>'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|html)$':
      '<rootDir>tools/jest/jest.filemock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
  setupTestFrameworkScriptFile: '<rootDir>tools/jest/framework-config.js',
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
  testResultsProcessor: './tools/jest/jestTrxProcessor.js',
}
