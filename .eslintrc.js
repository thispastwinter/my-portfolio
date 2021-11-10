module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended",
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint", "@nuxt", "prettier"],
  rules: {
    "no-unused-expressions": "off",
    "vue/no-v-html": "off",
    "no-console": ["error", { allow: ["warn", "error"] }],
  },
}
