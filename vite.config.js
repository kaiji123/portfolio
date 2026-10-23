import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from https://kaiji123.github.io/portfolio/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
});
