import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class", // Forces manual toggling, effectively disabling system-based dark mode
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#13ec13",
                "primary-dark": "#0fb80f",
                "background-light": "#f6f8f6",
                "background-dark": "#102210",
                "surface-light": "#ffffff",
                "surface-dark": "#1a2e1a",
            },
            fontFamily: {
                "display": ["var(--font-public-sans)", "sans-serif"]
            },
        },
    },
    plugins: [],
};
export default config;
