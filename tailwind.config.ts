import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage:{
        "hero-comingSoon-banner-desktop": "url('/assets/comingSoon/senamClub_comingsoon1_desktop.png')",
        "hero-comingSoon-banner-mobile": "url('/assets/comingSoon/senamClub_comingsoon1_mobile.png')",
        "hero-trainingCLub-banner-1" : "url('/assets/background/senamClub_HeroBanner_TrainingCLub-1.jpg')",
        "hero-trainingCLub-banner-2" : "url('/assets/background/senamClub_HeroBanner_TrainingCLub-2.jpg')",
        "hero-trainingCLub-banner-logo" : "url('/assets/background/senamClub_HeroBanner_TrainingClub_LOGOONLY.jpg')",
      },
      keyframes: {
        scrollText: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scroll: "scrollText 33s linear infinite",
      },
      backgroundPosition:{
        'center-18': 'center left -10rem'
      }
    },
  },
  plugins: [],
} satisfies Config;
