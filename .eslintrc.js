module.exports = {
  extends: ["@nighttrax/eslint-config-tsx", "plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        doubleQuote: true,
      },
    ],
    "react/react-in-jsx-scope": "off", // Disable the rule that requires React to be in scope,
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/vite.config.ts", // Include TypeScript config file
        ],
      },
    ],
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the react version
    },
  },
  overrides: [
    {
      files: ["*.js", "*.ts", "*.jsx", "*.tsx"],
      rules: {
        quotes: ["error", "double"],
      },
    },
  ],
};
