import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: 'profilesapp/dist',
    emptyOutDir: true,  // Clear the output directory before building
  },
})
