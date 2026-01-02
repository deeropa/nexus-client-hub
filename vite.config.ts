import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

export default defineConfig({
  base: "/nexus-client-hub/",
  plugins: [react()],
})
