import { defineConfig } from 'vite'

export default defineConfig({
  // './' makes all asset paths relative, so the site works whether it's served
  // from the repo root (username.github.io/tron-portfolio/) or a custom domain.
  base: './',
  build: {
    outDir: 'dist',
  },
})
