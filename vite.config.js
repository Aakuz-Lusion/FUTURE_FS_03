# Update vite.config.js
@"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/FUTURE_FS_03/',
  server: {
    port: 3000,
    open: true
  }
})
"@ | Out-File -FilePath vite.config.js -Encoding utf8