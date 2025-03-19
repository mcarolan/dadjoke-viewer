module.exports = {
    preset: "ts-jest",
    transform: {
      "^.+\\.(ts|tsx)$": ["babel-jest"], // Use babel-jest to transform TypeScript
    },
    testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
    testPathIgnorePatterns: ["/node_modules/", "/dist/"],
    globals: {
      "ts-jest": {
        isolatedModules: true, // To handle modules independently
      },
    },
  };
  