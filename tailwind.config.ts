import type { Config } from 'tailwindcss';
import { typography } from './theme/typography';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: typography.fontFamily.sans,
        serif: typography.fontFamily.serif,
        script: typography.fontFamily.script,
      },
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeight,
      lineHeight: typography.lineHeight,
      letterSpacing: typography.letterSpacing,
    },
  },
  plugins: [],
};

export default config;
