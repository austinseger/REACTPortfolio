import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'public', // Ensures the root is set correctly
  build: {
    outDir: '../dist', // Outputs the build files in the dist folder
    rollupOptions: {
      input: './public/index.html', // Ensures Vite uses the correct input file
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
