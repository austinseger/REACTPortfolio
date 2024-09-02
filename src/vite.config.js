import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure this is correctly set to the build output directory
  },
  server: {
    port: 3000,
    open: true,
  },
});
