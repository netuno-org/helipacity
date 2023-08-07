import { defineConfig } from 'vite'
import vitePluginImp from 'vite-plugin-imp';
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  server: {
    port: 3000,
    strictPort: true
  },
  plugins: [
    react()
  ]
})
