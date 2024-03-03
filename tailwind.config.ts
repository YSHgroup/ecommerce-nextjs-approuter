import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      lineHeight: {
        'extreme': '4rem'
      },
      boxShadow: {
        'convex': '0 5px 5px rgba(0, 0, 0, 0.3), inset 0 -4px 0 rgba(255, 255, 255, 0.6)',
        'concave': '0 5px 5px rgba(0, 0, 0, 0.3), inset 0 4px 0 rgba(255, 255, 255, 0.6)'
      }
    },
  },
  plugins: [],
}
export default config
