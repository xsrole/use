import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot:'./',
      outputDir:[
        resolve(__dirname, './dist/core/es/src'),
        resolve(__dirname, './dist/core/lib/src')
      ],
      tsConfigFilePath:'../../tsconfig.json'
    })
  ],
  build: {
    target:'modules',
    outDir:'es',
    minify:true,
    rollupOptions: {
      external: ["vue","axios"],
      input:['index.ts'],
      output: [
        {
          format:'es',
          entryFileNames:'[name].js',
          preserveModules:true,
          dir:resolve(__dirname,'./dist/core/es'),
          globals: {
            vue: "Vue",
            axios:"Axios"
          },
        },
        {
          format:'cjs',
          entryFileNames:'[name].js',
          preserveModules:true,
          dir:resolve(__dirname,'./dist/core/lib'),
          globals: {
            vue: "Vue",
            axios:"Axios"
          },
        },
      ]
    },
    lib: {
      entry: "./index.ts",
      name: "antrioe",
    },
  },
  
});
