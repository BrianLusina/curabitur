module.exports = {
  moduleFileExtensions: [
    "ts",
    "tsx",
    "web.js",
    "mjs",
    "js",
    "json",
    "web.jsx",
    "jsx",
    "node"
  ],
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx,mjs}"],
  coveragePathIgnorePatterns: [
    "<rootDir>/build/",
    "<rootDir>/node_modules/",
    "<rootDir>/src/(Root.*.(js|jsx))",
    "<rootDir>/src/index.js",
    "<rootDir>/src/serviceWorker.ts",
    // "<rootDir>/src/*/{initialState.ts}",
    "<rootDir>/src/*/*/[A-Za-z]+(P|p)rop.*.(js|jsx)",
    "<rootDir>/src/store/DevTools.js",
    "<rootDir>/src/store/configureStore.(prod|staging|dev).js",
    "<rootDir>/src/store/configureStore.ts",
    "<rootDir>/src/store/middleware.ts",
    "<rootDir>/src/*/endpoints.+\\.js$",
    "<rootDir>/src/api/constants.ts",
    "<rootDir>/src/api/endpoints.js",
    "<rootDir>/src/actionTypes/"
  ],
  setupFiles: [
    "<rootDir>/config/polyfills.js",
    "<rootDir>/config/setupTests.js",
    "<rootDir>/config/browserMock.js"
  ],
  testMatch: [
    "<rootDir>/__tests__/**/*.{js,ts,tsx,jsx,mjs}",
    "<rootDir>/?(*.)(spec|test).{js,jsx,ts,tsx,mjs}",
    "<rootDir>/src/**/__tests__/**/*.{js,ts,tsx,jsx,mjs}",
    "<rootDir>/src/**/?(*.)(spec|test).{js,ts,tsx,jsx,mjs}"
  ],
  testEnvironment: "node",
  testURL: "http://localhost",
  transform: {
    "^.+\\.(ts|tsx|js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|mjs|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
  },
  // TODO: transform ignore patterns
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"],
  // TODO: add module mappers for stylesheets
  moduleNameMapper: {
    "^react-native$": "react-native-web",
    // "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    // "\\.(css|less|scss)$": "<rootDir>/src/assets/styles",
    // "\\.(css)$": "<rootDir>/node_modules/",
    // "\\.(png|jpg|svg)$": "<rootDir>/src/assets/images",
    "^Styles/(.*)$": "<rootDir>/src/styles/$1",
    "^Store/(.*)$": "<rootDir>/src/store/$1",
    "^Components/(.*)$": "<rootDir>/src/components/$1",
    "^Storage/(.*)$": "<rootDir>/src/services/storage/$1",
    "^Translations/(.*)$": "<rootDir>/src/i18n/$1",
    "^Providers/(.*)$": "<rootDir>/src/providers/$1",
    "^TimeUtils": "<rootDir>/src/utils/timeUtils.ts",
    "^DomUtils": "<rootDir>/src/utils/domUtils.ts",
    "^Pages/(.*)$": "<rootDir>/src/pages/$1"
  },
  setupFilesAfterEnv: ["<rootDir>/config/setupTests.js"]
};
