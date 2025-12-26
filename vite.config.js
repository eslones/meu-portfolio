import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'  // ← essa linha

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss()  // ← e essa aqui
  ],
})