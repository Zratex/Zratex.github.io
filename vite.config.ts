import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Base path for GitHub Pages at the root level
  build: {
    outDir: 'dist'
  }
})
