module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "standard", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "comma-dangle": ["error", "never"],
    "react/jsx-uses-react": 0,
    "react/react-in-jsx-scope": 0,
    semi: ["error", "never"]
  }
}
