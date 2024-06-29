import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4242,
    proxy: {
      // string shorthand
      // with options
      "/api": {
        target: "http://localhost:5252",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});

// module.exports = {
//   devServer: {
//     proxy: {
//       "/api": {
//         target: "http://localhost",
//         changeOrigin: true,
//         pathRewrite: {
//           "^/api": `users/username/${username}`,
//         },
//       },
//     },
//   },
// };
