import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      external: ['@azure/msal-browser']
    }
  },
  server: {
    host: true,
    port: 62858,
    proxy: {
      '/api': {
        target: process.env.services__weatherapi__https__0 || process.env.services__weatherapi__http__0,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
        secure: false
      }
    }
  }
})