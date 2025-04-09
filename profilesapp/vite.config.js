import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], // Enable React Fast Refresh
  server: {
    port: 3000, // Change this to your desired port
    open: true, // Automatically open the browser
  },
  base: './', // This is important for the app to work in the Amplify Console
})
