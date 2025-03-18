import MechtauiPreset from "mechtaui/preset";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  presets: [MechtauiPreset],
};
