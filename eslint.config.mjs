import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      eqeqeq: "warn",
      semi: ["warn", "always"],
      "no-unused-expressions": "warn",
      "no-inline-comments": "warn",
      "no-console": "warn",
    }
  }

];