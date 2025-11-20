import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(" path_____________>  ",__dirname);

export default defineConfig({
  plugins: [vue()],
  //root:resolve(__dirname, 'src'),
  base:'./',
  publicDir: './public',
  appType: 'mpa',
  build: {
    "outDir": 'docs',
    emptyOutDir: true,
    //cssCodeSplit: false, bad view
    rollupOptions: {
      //experimentalMinChunkSize: Infinity,
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        hashCharacters: "hex",
        //sanitizeFileName: "false",
        assetFileNames: ({ name }) => {
          //console.log(name)
          return "assets/[name]-[hash][extname]"
        },
        chunkFileNames: ({ name }) => {
          //console.log(name);
          let nm ="a"+[name];
          return `assets/[name]-[hash].js`
        },
        manualChunks(id) {
          const match = /_plugin-vue_export-helper/.exec(id);
        
          if (id.includes('@vue') ) {
            return 'oa';
          } else if (id.includes('vue.runtime')) {
            return 'oa';
          } else if (id.includes('vue-plugin')) {
            return 'oaa';
           } else if (id.includes('export')) {
            return 'oa';
          }
        },

      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      
    },
  },
})
