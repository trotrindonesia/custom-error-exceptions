module.exports = {
  lines: 80,
  statements: 80,
  functions: 80,
  branches: 80,
  'check-coverage': true,
  include: ['src/**/*.js', 'lib/**/*.js'],
  exclude: [
    'src/**/index.js',
    'lib/**/index.js',
    'src/index.js',
    '**/*.spec.js',
    'test/',
  ],
  reporter: ['html', 'text', 'lcov', 'text-summary'],
  all: true,
  cache: true,
  'report-dir': './artifacts/coverage'
};
