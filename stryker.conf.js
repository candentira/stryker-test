module.exports = {
  $schema: 'https://raw.githubusercontent.com/stryker-mutator/stryker/master/packages/api/schema/stryker-core.json',
  mutator: 'typescript',
  packageManager: 'npm',
  reporters: [ 'html', 'clear-text', 'progress', 'dashboard' ],
  testRunner: 'jest',
  coverageAnalysis: 'off',
  jest: {
    config: require('./jest.config'),
    //next line is required for properly kill mutants - without it all survive
    enableFindRelatedTests: false
  },
  mutate: [
    'src/**/*.ts'
  ],
  thresholds: { high: 80, low: 60, break: null },
  maxConcurrentTestRunners: 2
}