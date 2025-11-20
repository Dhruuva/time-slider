import { fileURLToPath, URL } from 'node:url'
import { dirname, resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  build: {
    emptyOutDir:true,
    copyPublicDir:false,
    target: 'es2015',
    lib: {
      entry: resolve(__dirname, 'src/components/TimeSlider.vue'),
      name: "TimeSlider",
      // the proper extensions will be added
      fileName: (format) => `times-slider.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
        assetFileNames:(chunk)=> {
          console.log(chunk.name);
          if (chunk.name === 'slider.css') {
            return 'times-slider.css'
          }
          return chunk.name || ''
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
