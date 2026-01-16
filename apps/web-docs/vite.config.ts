import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
      cors: {
        origin: ['*'], // List all Storybook URLs here
        credentials: false,
      },
    },
});
