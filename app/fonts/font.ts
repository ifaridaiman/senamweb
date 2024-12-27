import localFont from "next/font/local";

// MADE Outer Sans Fonts
export const outerSansLight = localFont({
  src: "./MADE Outer Sans Light PERSONAL USE.otf",
  variable: "--font-outer-sans-light",
  weight: "300",
});
export const outerSansMedium = localFont({
  src: "./MADE Outer Sans Medium PERSONAL USE.otf",
  variable: "--font-outer-sans-medium",
  weight: "500",
});
export const outerSansRegular = localFont({
  src: "./MADE Outer Sans Regular PERSONAL USE.otf",
  variable: "--font-outer-sans-regular",
  weight: "400",
});

// Mulish Fonts
export const mulishBold = localFont({
  src: "./Mulish-Bold.ttf",
  variable: "--font-mulish-bold",
  weight: "700",
});
export const mulishLight = localFont({
  src: "./Mulish-Light.woff",
  variable: "--font-mulish-light",
  weight: "300",
});