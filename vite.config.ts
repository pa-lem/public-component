import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remoteApp',
      filename: 'remoteEntry.js',
      exposes: {
        './RemoteComponent': './lib/RemoteComponent',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    // lib: {
    //   entry: './lib/RemoteComponent/index.ts',
    //   formats: ['es'],
    //   name: "plugin"
    // },
    // rollupOptions: {
    //   external: ['react', 'react/jsx-runtime'],
    //   // external: ['react'],
    // }
  }
})
