/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path, { resolve } from 'path'

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
      '@lib': path.resolve(__dirname, './src/lib'),
      // modules
      '@users': path.resolve(__dirname, './src/users'),
      '@dashboard': path.resolve(__dirname, './src/dashboard'),
      '@settings': path.resolve(__dirname, './src/settings'),
      '@store': path.resolve(__dirname, './src/store'),

    }
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: [resolve(__dirname, '__test__/setup/setup.ts')],
    reporters: 'verbose',
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache']
  }
})
