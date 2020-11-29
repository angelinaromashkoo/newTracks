module.exports = {
  extends: [
    "airbnb",
    "prettier",
    "prettier/react",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    },
  },
  rules: {
    "no-use-before-define": [
      "error",
      {
        variables: false,
      },
    ],
    "no-underscore-dangle": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],
  },
};
