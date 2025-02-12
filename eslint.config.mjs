import pluginJs from "@eslint/js";

export default [
    pluginJs.configs.recommended,

   {
       rules: {
        'no-unused-vars': 'warn',
        'semi': ['error', 'always'],
        'quotes': ['error', 'double'],
       }
   }
];