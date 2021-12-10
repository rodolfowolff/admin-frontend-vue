import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const path = require('path');
const projectRootDir = path.resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: /^@\/(.+)/,
        replacement: path.resolve(projectRootDir, 'src') + '/$1',
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