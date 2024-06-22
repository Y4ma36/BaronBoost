import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
