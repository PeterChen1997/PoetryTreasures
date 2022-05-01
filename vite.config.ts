import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

const isProduction = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-unused-modules
export default defineConfig({
  base: isProduction ? `https://bunny-base.b-cdn.net` : '',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/_mixins";`,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  envDir: './env',
  plugins: [react(), tsconfigPaths()],
  /* If proxy is needed
  server: {
    proxy: {
      "/api": "localhost:8080"
    }
  },
  */
  build: {
    sourcemap: true,
  },
});
