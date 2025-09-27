// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    // Optimizaciones adicionales para el build
    build: {
        cssCodeSplit: false,
        rollupOptions: {
            output: {
            manualChunks: undefined,
            }
        }
    }
  },
  
  output: "static",
  
  // Configuración más específica de prefetch
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  
  // Optimizaciones de build
  build: {
    inlineStylesheets: 'auto',
  }
});
