import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@styles',
        replacement: resolve(__dirname, './src/styles/'),
      },
      {
        find: '@sectionsStyles',
        replacement: resolve(__dirname, './src/styles/modules/sections'),
      },
      {
        find: '@componentsStyles',
        replacement: resolve(__dirname, './src/styles/modules/components'),
      },
      {
        find: '@components',
        replacement: resolve(__dirname, './src/components/'),
      },
    ],
  },
})
