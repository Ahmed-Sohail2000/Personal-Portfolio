import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  // Dynamically set repo base name for production deployments
  const repoName = env.VITE_REPO_NAME || "";

  return {
    // ✅ Match React Router's basename
    // Use relative base in dev, prefix in prod if repoName or custom base is set
    base: mode === "development" ? "/" : repoName ? `/${repoName}/` : "./",

    plugins: [react(), tailwindcss()],

    server: {
      open: true,
      host: false, // Allow access from network devices
      proxy: {
        "/api": {
          target: "http://localhost:5000",
          changeOrigin: true,
          secure: false,
        },
      },
    },

    build: {
      outDir: "dist",
    },
  };
});
