import { defineConfig } from '@tofrankie/eslint'

export default defineConfig({
  ignores: ['archives/**', 'docs/**', 'images/**'],
  typescript: true,
  rules: {
    'e18e/prefer-static-regex': 'off',
    'markdown/require-alt-text': 'off',
  },
})
