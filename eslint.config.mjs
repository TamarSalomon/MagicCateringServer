import js from "@eslint/js";
import standard from "eslint-config-standard";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

export default {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-standard"
  ],
  parser: typescriptParser,
  plugins: [typescriptEslint],
  env: {
    node: true,
    es2021: true,
    browser: true,  
  },
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {
    "no-unused-vars": "warn",
    "semi": ["error", "always"],
    "quotes": ["error", "double"]
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: typescriptParser,
      plugins: [typescriptEslint],
      rules: {
        "no-unused-vars": "warn",
        "quotes": ["error", "double"]
      }
    },
    {
      files: ["*.js"],
      rules: {
        "no-console": "warn",
        "no-unused-vars": "warn"
      }
    }
  ]
};
