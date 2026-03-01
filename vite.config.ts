import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // GitHub Pages用（元のリポジトリ名に戻す）
  base: "/Liveragencylp/",

  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Figma Make互換設定（そのまま）
  assetsInclude: ["**/*.svg", "**/*.csv"],
});
