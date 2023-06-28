/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",'./src/**/*.{svelte,js,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'pattern': "url('/public/img/background/bg_main_sp.jpg')",
        'banner': "url('/public/img/background/bg_ttl.png')",
        'banner-character': "url('/public/img/background/t_ttl_character.png')",
      }
    },
  },
  plugins: [],
}

