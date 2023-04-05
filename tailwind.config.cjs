/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "nd-primary": "#52459F",
        "nd-dark": "#1B1C31",
        "nd-dark-1/2": "rgba(27, 28, 49, .5)",
        "nd-light": "#F6F6FA",
        "nd-gray": "#AEA9BA",
        "nd-white": "#BCB7DB",
        "nd-white-1/10": "rgba(188, 183, 219, .1)",
        "nd-secondary": "#938FB1",
        "nd-third": "#6C6889",
        "nd-code-bg": "#24243C",
        "nd-code-bg-4/5": "rgba(36, 36, 60, 0.8)",
        "nd-code-tag": "#797585",
        "nd-code-property": "#AF489B",
        "nd-code-nametag": "#ED5B84",
        "nd-code-class": "#0063B8",
        "nd-code-char": "#AEA9BA",
      },
    },
  },
  plugins: [],
};
