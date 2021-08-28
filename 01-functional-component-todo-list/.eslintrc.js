module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'import/extensions': 'off',
    'import/no-cycle': 'off',
    'no-underscore-dangle': 'off',
  },
};
