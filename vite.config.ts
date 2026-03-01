import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // 👇 GitHub Pages用（超重要）
  base: "/CocoLablp/",   // ← ここにカンマ追加

  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Figma Make互換設定（消さない）
  assetsInclude: ["**/*.svg", "**/*.csv"],
});
