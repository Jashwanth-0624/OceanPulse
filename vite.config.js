import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true
  },
  preview: {
    // Allow Render preview hosts. Include exact hostname from env for safety.
    // RENDER_EXTERNAL_HOSTNAME is set by Render for the live service hostname.
    allowedHosts: [
      /\.onrender\.com$/,
      process.env.RENDER_EXTERNAL_HOSTNAME
    ].filter(Boolean)
  }
})
