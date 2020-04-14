module.exports = {
  roots: ['test'],
  testEnvironment: 'node',
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  testRegex: '(\\.(test|spec))\\.(ts|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  globals: {
    'ts-jest': {
      diagnostics: {
        pathRegex: '(\\.(test|spec))\\.(ts)$',
      },
    },
  },
};