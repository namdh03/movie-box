import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@configs": path.resolve(__dirname, "./src/configs"),
            "@contexts": path.resolve(__dirname, "./src/contexts"),
            "@helpers": path.resolve(__dirname, "./src/helpers"),
            "@hooks": path.resolve(__dirname, "./src/hooks"),
            "@layouts": path.resolve(__dirname, "./src/layouts"),
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@routes": path.resolve(__dirname, "./src/routes"),
            "@themes": path.resolve(__dirname, "./src/themes"),
            "@utils": path.resolve(__dirname, "./src/utils"),
            "@": path.resolve(__dirname, "./src"),
        },
    },
    plugins: [react()],
});
