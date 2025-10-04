import { defineConfig } from "vite";

import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/responsive-text-component/",
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        math: "parens-division",
      },
    },
  },
});
