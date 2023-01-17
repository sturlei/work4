import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import alias from "rollup-plugin-alias";
import path from "path";
import  postCSS  from  "postcss-import";

// https://vitejs.dev/config/

export default ({ mode }) => {
    // Load app-level env vars to node-level env vars.
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
      plugins: [
    react(),
  ]
    });
}