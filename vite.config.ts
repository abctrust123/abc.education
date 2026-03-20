import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('@supabase')) return 'supabase'
          if (id.includes('framer-motion')) return 'framer-motion'
          if (id.includes('react-router')) return 'react-vendor'
          if (id.includes('react-dom')) return 'react-vendor'
          if (/node_modules[/\\]react[/\\]/.test(id)) return 'react-vendor'
        },
      },
    },
  },
})
