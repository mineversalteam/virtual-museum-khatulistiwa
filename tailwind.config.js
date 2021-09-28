const COLORS = {
  primary: '#7D5235',
  secondary: '#E9E1CF',
  "primary-blue": "#0069B2",
  "secondary-blue": "#0096FF",
  "dark-blue": "#005da0"
}

module.exports = {
  purge: {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: {
        greedy: [
          /bg-transparent/,
          /bg-white/,
          /bg-black/
        ],
      },
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        minecraftia: 'Minecraftia',
        enchantment: 'MinecraftEnchantment',
        minecraftTen: 'MinecraftTen',
        dmSans: '"DM Sans"'
      },
      backgroundImage: {
        book: "url('/assets/background/book.webp')"
      },
      lineHeight: {
        '0': '0'
      },
      backgroundSize: {
        'full': '100%'
      },
      textColor: COLORS,
      borderColor: COLORS,
      backgroundColor: COLORS,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
