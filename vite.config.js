import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5175,
    proxy: {
      "/admin/api": {
        target: "https://crateweb.cloud",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
