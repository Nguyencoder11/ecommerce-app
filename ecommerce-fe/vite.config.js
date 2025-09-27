import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['babel-plugin-react-compiler']
        ],
      },
    }),
    tailwindcss(),
  ],

  // Set cho ecommerce-fe chay o port 5172 khac cong mac dinh cua vite 5173
  server: {
    port: 5172
  }
})
