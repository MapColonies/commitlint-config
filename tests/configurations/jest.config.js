/** @type {import('jest').Config} */
module.exports = {
  coverageReporters: ['text', 'html'],
  rootDir: '../../.',
  testMatch: ['<rootDir>/tests/**/*.spec.js'],
  collectCoverage: true,
  moduleDirectories: ['node_modules', 'src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts}', '!**/node_modules/**', '!**/vendor/**'],
  reporters: [
    'default',
    [
      'jest-html-reporters',
      { multipleReportsUnitePath: './reports', pageTitle: 'integration', publicPath: './reports', filename: 'integration.html' },
    ],
  ],
  testEnvironment: 'node',
};
