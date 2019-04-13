module.exports = {
  coverageReporters: ["json", "html", "text", "clover"],
  collectCoverageFrom: ["src/**/*.js", "!src/index.js"],
  moduleFileExtensions: ["js", "jsx", "css", "less"],
  moduleNameMapper: {
    "^.+\\.(jpg|jpeg|png|gif|svg|css|less)$": "<rootDir>/test/fileMock.js"
  },
  setupFilesAfterEnv: ["<rootDir>/test/setupTests.js"],
  testEnvironment: "jsdom"
};
