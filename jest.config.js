module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageReporters: ["lcov", "json"],
  collectCoverageFrom: [
      "**/src/**"
  ],
  transform: {
     "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ]
}
