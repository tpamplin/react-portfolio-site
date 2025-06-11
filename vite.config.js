import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import autoprefixer from "autoprefixer";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss(), autoprefixer()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
