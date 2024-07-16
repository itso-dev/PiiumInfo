import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from "path";

export default defineConfig({
  optimizeDeps: {
    include: ["quill"]
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
  },
  server: {
  },
})