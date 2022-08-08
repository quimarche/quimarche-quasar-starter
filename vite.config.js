import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import eslintPlugin from 'vite-plugin-eslint'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    eslintPlugin(),
    quasar({ sassVariables: 'src/quasar-variables.sass' }),
    vue({ template: { transformAssetUrls } })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
