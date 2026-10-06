import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      // Página de venda, termos de uso e política de privacidade
      input: {
        principal: 'index.html',
        termos: 'termos/index.html',
        privacidade: 'privacidade/index.html',
      },
    },
  },
})
