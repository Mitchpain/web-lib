module.exports = {
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  modulePathIgnorePatterns: ['<rootDir>/lib/'],
  collectCoverageFrom: ['src/**/*.ts', '!src/index.ts', '!**/*.d.ts'],
}
