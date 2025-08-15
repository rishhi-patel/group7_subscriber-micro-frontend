import preact from '@preact/preset-vite';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'x-form.js',
        assetFileNames: 'x-form.[ext]',
      },
      // Handle CommonJS modules properly
      external: [],
      // Ensure proper module resolution
      resolve: {
        alias: {
          // Force ESM versions where available
        },
      },
    },
  },
  // Optimize dependencies for browser
  optimizeDeps: {
    include: [
      '@opentelemetry/api',
      '@opentelemetry/sdk-trace-web',
      '@opentelemetry/sdk-trace-base',
      '@opentelemetry/exporter-otlp-http',
    ],
    // Force ESM versions
    force: true,
  },
  // Handle CommonJS modules
  define: {
    global: 'globalThis',
  },
});
