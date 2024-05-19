import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        math: "parens-division",
      },
    },
  },
  server: {
    open:'/',
    host:'0.0.0.0',
    proxy: {
      "/api": {
        target: "http://www.tuqiuning.cn",
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true, // 允许跨域
      },
    },
  },
});
