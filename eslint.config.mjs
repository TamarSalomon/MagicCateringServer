import pluginJs from "@eslint/js";

export default [
    pluginJs.configs.recommended,

   {
       rules: {
        'no-unused-vars': 'warn',
        'semi': ['error', 'always'],
        'quotes': ['error', 'double'],
        'space-infix-ops': ["error", { "int32Hint": false }],
        "comma-spacing": ["error", { "before": false, "after": true }],
        "indent": ["error", 2]
       }
   }
];