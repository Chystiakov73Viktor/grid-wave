import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { envConfig } from 'vite-plugin-env-config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), envConfig()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      pages: '/src/pages',
      constants: '/src/constants',
      images: '/src/images',
    },
  },
  // base: '/grid-wave',
})
