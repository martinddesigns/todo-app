/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},

    spacing: () => ({
      ...Array.from({ length: 301 }, (_, index) => index)
      .filter((i) => [ 0, i ])
      .reduce(
        (acc, i) => ({ ...acc, [i]: `${i}px` }),
        {}
      ),
    }),

    borderRadius: () => ({
      ...Array.from({ length: 301 }, (_, index) => index)
      .filter((i) => [ 0, i ])
      .reduce(
        (acc, i) => ({ ...acc, [i]: `${i}px` }),
        {}
      ),
    }),

  },
  plugins: [],
}
