module.exports = {
  root: true,
  env: {
    es6: false,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  parserOptions: {
    "ecmaVersion": 2017,
    "sourceType": "module",
  },
  rules: {
    quotes: ["error", "double"],
  },
};
