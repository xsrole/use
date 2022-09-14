import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({ include: './src' })
  ],
  build:{
    lib:{
      entry:resolve(__dirname, './src/index.ts'),
      name: 'xsr-layouts',
      fileName: 'index'
    },
    rollupOptions:{
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});
