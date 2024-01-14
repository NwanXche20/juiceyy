/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-jost)"],
        "secondary-sans": ["var(--font-quicksand)"],
      },
      colors: {
        "main-bg": "#f9eab3",
        "text-color": "#473525E5",
        primary: "#FFA500",
        "contact-white": "#FFFFFFCC",
      },
      backgroundImage: {
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic':
        //   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        "website-background": "url('/src/bg-1.png')",
      },
      dropShadow: {
        nav: "0px 4px 15px rgb(138, 138, 138)",
      },
    },
  },
  plugins: [],
};
