module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#222222",
          90: "#3B3B3B",
          80: "#515151",
          70: "#626262",
          60: "#7E7E7E",
          50: "#9E9E9E",
          40: "#B1B1B1",
          30: "#CFCFCF",
          20: "#E1E1E1",
          10: "#F7F7F7",
        },
        secondary: {
          100: "#1F2933",
          90: "#323F4B",
          80: "#3E4C59",
          70: "#52606D",
          60: "#616E7C",
          50: "#7B8794",
          40: "#9AA5B1",
          30: "#CBD2D9",
          20: "#E4E7EB",
          10: "#F5F7FA",
        },
      },
    },
  },
  plugins: [],
};
