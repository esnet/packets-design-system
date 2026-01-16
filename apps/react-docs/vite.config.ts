import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
      cors: {
        origin: ['*'], // List all Storybook URLs here
        credentials: false,
      },
    },
    plugins: [react()],
});
