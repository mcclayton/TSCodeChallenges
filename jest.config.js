module.exports = {
  testEnvironment: 'node',
  transform: {
    "^.+\\.ts?$": "ts-jest",
    '^.+\\.js?$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleFileExtensions: [
    "ts",
    "js",
    "json",
    "node",
  ],
  testPathIgnorePatterns: ['/node_modules/'],
  testMatch: ['<rootDir>/src/**/*.{spec,test}.{js,ts}'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,ts,js}',
    '!src/**/*.d.ts',
  ],
};
