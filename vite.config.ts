// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or other plugins you use

export default defineConfig({
  base: '/nexus-client-hub/', // <-- add your repo name here (trailing slash important)
  plugins: [react()],
})
