import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/admin',
  plugins: [vue()],
  server: {
    host: true
  }
})