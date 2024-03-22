import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';
import { presetAttributify, presetUno } from 'unocss';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    UnoCSS({ presets: [presetUno(), presetAttributify()] }),
    svgr({
      include: '**/*.svg?react',
    }),
  ],
  server: {
    port: 3000,
  },
});
