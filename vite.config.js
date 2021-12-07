import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        },
      },
      {
        find: '@tailwindConfig',
        replacement: () => './src/css/tailwind.config.js',
      }
    ],
  },
  optimizeDeps: {
    include: [
      '@tailwindConfig',
    ]
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3001/'
      }
    }
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  }
});