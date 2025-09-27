import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],

  // Set cho admin chay o port 5174 khac cong mac dinh cua vite 5173
  server: {
    port: 5174,
  }
})
