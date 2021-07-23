// @ts-nocheck
import { defineConfig } from 'vite';
// import ViteRestart from "vite-plugin-restart";
import { join } from 'path';

export default defineConfig(({ command }) => {
  return {
    // root: 'src',

    server: {},

    build: {
      manifest: true,
      outDir: join(__dirname, 'dist'),
      emptyOutDir: true,
      output: {
        sourcemap: true,
      },
    },

    plugins: [],
  };
});
