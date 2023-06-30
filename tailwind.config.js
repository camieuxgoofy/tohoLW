/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", './src/**/*.{svelte,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'aref-ruqaa': ['"Aref Ruqaa Ink"', 'serif'],
      },
      backgroundImage: {
        'pattern': "url('./assets/background/bg_main_pc.jpg')",
        'banner': "url('./assets/background/bg_ttl.png')",
        'banner-character': "url('./assets/background/t_ttl_character.png')",
      },
    },
  },
  plugins: [],
}