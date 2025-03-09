import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser, // Ceci permet d'utiliser des variables globales côté navigateur
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  {
    // Ajouter une configuration spécifique pour le backend (Node.js)
    files: ['server/**/*.js'],  // Si tu as ton code backend dans un dossier "server"
    languageOptions: {
      ecmaVersion: 2020,
      globals: { ...globals.node, ...globals.browser },  // Ajout des variables globales pour Node.js et le navigateur
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module', // Cela peut être 'script' si tu n'utilises pas des modules ES
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-undef': ['error', { 'typeof': true }],
      // Autres règles spécifiques à Node.js si nécessaire
    },
  },
]
