import { defineConfig } from '@tofrankie/eslint'

export default defineConfig({
  ignores: ['archives/**', 'docs/**', 'images/**'],
  typescript: true,
  rules: {
    'markdown/require-alt-text': 'off',
  },
})
