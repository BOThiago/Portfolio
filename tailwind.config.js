/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
    screens: {
        "2xl": "1536px",
        xl: "1280px",
        lg: "1024px",
        md: "768px",
        sm: "640px",
        xxs: "540px",
        "2xs": "400px",
        "3xs": "340px",
    },
    purge: [],
    darkMode: false,
    extend: {
        fontFamily: {
            sans: "Poppins",
            alt: "Ubuntu",
        },
        fontSize: {
            sm: "16px",
            base: "18px",
            lg: "20px",
            xl: "24px",
            "2xl": "30px",
            "3xl": "36px",
            "4xl": "48px",
            "5xl": "60px",
            "6xl": "72px",
            "7xl": "96px",
            "8xl": "128px",
            "9xl": "156px",
        },
    },
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    variants: {},
    plugins: [],
};
export const plugins = [];
