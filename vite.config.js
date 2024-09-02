import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'public', 
  build: {
    outDir: '../dist', 
    rollupOptions: {
      input: './public/index.html', 
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
