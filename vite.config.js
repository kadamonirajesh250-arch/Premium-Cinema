import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: '/react.html'
  },
  build: {
    rollupOptions: {
      input: {
        main: 'react.html'
      }
    }
  }
})
