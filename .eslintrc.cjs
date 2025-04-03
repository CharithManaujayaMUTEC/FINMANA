module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended', // Add TypeScript support
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser', // Use TypeScript parser
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // Enable JSX syntax
    },
  },
  settings: {
    react: {
      version: '18.2',
    },
  },
  plugins: ['react-refresh', '@typescript-eslint'], // Add TypeScript plugin
  rules: {
    'react-refresh/only-export-components': 'warn', // Treat this as a warning
    'no-unused-vars': 'warn', // Warn instead of error
    '@typescript-eslint/no-unused-vars': 'warn', // TypeScript-specific rule for unused vars
    'react/prop-types': 'off', // If you're using TypeScript, you can disable PropTypes rule
    'react/react-in-jsx-scope': 'off', // Not required with React 17 JSX Transform
    // Add other warnings or disable rules here as needed
  },
}