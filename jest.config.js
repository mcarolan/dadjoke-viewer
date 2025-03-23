/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/tests/**/*.test.ts'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  // Optional: if using path aliases like @/services/...
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};