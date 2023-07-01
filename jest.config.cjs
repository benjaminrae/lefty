/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  resolver: 'jest-ts-webcompat-resolver',
};

module.exports = config;
