
import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig({
    
  files: ['**/*.{js,mjs,cjs,ts}'],

  extends: [
    js.configs.recommended,
    tseslint.configs.recommended,
  ],

  languageOptions: {
    globals: globals.node,
  },

  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
  },
});
