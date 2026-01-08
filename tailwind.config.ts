import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                display: ["var(--font-space-grotesk)", "sans-serif"],
            },
            colors: {
                background: "#050509", // backgroundDark
                surface: "#0B0D12", // backgroundSection
                card: "#12141C",

                primary: {
                    DEFAULT: "#16F2B3", // primaryAccent
                    glow: "rgba(22, 242, 179, 0.5)",
                },
                secondary: {
                    DEFAULT: "#5B8DFF", // secondaryAccent
                    glow: "rgba(91, 141, 255, 0.5)",
                },
                danger: {
                    DEFAULT: "#FF4F6D",
                    glow: "rgba(255, 79, 109, 0.5)",
                },

                text: {
                    primary: "#F9FAFB",
                    muted: "#9CA3AF",
                },
                border: {
                    subtle: "#1F2933",
                    DEFAULT: "#1F2933",
                }
            },
            fontSize: {
                "hero-title": "clamp(2.8rem, 4vw, 4rem)",
                "section-title": "clamp(2rem, 3vw, 3rem)",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
            animation: {
                "spin-slow": "spin 20s linear infinite",
                "pulse-slow": "pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "float": "float 6s ease-in-out infinite",
                "marquee": "marquee 25s linear infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                marquee: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-100%)" },
                }
            }
        },
    },
    plugins: [],
};
export default config;
