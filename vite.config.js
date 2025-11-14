import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    hmr: {
      host: 'localhost',
    },
    // Цей блок дозволяє підключення з localtunnel
    allowedHosts: [
      '*.loca.lt', // Дозволяємо БУДЬ-ЯКУ адресу від localtunnel
    ],
  },
});