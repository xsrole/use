import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot:'src',
      outputDir:[
        resolve(__dirname, './dist/es'),
        resolve(__dirname, './dist/lib')
      ],
      tsConfigFilePath:'./tsconfig.json'
    })
  ],
  build: {
    target:'modules',
    outDir:'./dist',
    minify:true,
    rollupOptions: {
      external: ["vue","axios"],
      input:['index.ts'],
      output: [
        {
          format:'es',
          entryFileNames:'[name].js',
          preserveModules:true,
          dir:resolve(__dirname,'./dist/es'),
          globals: {
            vue: "Vue",
            axios:"Axios"
          },
        },
        {
          format:'cjs',
          entryFileNames:'[name].js',
          preserveModules:true,
          dir:resolve(__dirname,'./dist/lib'),
          globals: {
            vue: "Vue",
          },
        },
      ]
    },
    lib: {
      entry: "./src/core/index.ts",
      name: "antrioe/core",
    },
  },
  
});
