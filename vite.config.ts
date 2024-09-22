import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // '@': path.resolve(__dirname, './src'),
      '@src': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@layout': path.resolve(__dirname, './src/layout'),
      '@adapters': path.resolve(__dirname, './src/common/adapters'),
      '@components': path.resolve(__dirname, './src/common/components'),
      '@context': path.resolve(__dirname, './src/common/context'),
      '@hooks': path.resolve(__dirname, './src/common/hooks'),
      '@models': path.resolve(__dirname, './src/common/models'),
      '@utils': path.resolve(__dirname, './src/common/utils'),
      '@styles': path.resolve(__dirname, './src/common/styles'),
      '@redux': path.resolve(__dirname, './src/redux'),
      '@routes': path.resolve(__dirname, './src/routes'),
      // modules
      "@lib": path.resolve(__dirname, './src/lib'),
      '@users': path.resolve(__dirname, './src/users'),
      '@dashboard': path.resolve(__dirname, './src/dashboard'),
      '@settings': path.resolve(__dirname, './src/settings'),
      '@store': path.resolve(__dirname, './src/store'),
    }
  }
})
