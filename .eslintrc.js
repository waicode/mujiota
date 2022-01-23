module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:nuxt/recommended",
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    project: "./tsconfig.eslint.json",
  },
  plugins: ["vue", "@typescript-eslint", "import"],
  rules: {},
};
