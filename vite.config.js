import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "./",  // 👈 Fixes incorrect asset paths on Netlify
  plugins: [react()],
})
