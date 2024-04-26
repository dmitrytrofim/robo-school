/** @type {import('tailwindcss').Config} */
export default {
 content: ['./index.html', './src/**/*.{js,ts,vue}'],
 theme: {
  extend: {},
  fontFamily: {
   jost: ['Jost', 'sans-serif'],
  },
  fontSize: {
   14: 'var(--sz-14)',
   16: 'var(--sz-16)',
   18: 'var(--sz-18)',
   20: 'var(--sz-20)',
   24: 'var(--sz-24)',
   30: 'var(--sz-30)',
   36: 'var(--sz-36)',
   50: 'var(--sz-50)',
   60: 'var(--sz-60)',
   70: 'var(--sz-70)',
  },
  colors: {
   trp: 'transparent',
  },
  fontWeight: {
   300: '300',
   400: '400',
   500: '500',
   600: '600',
   700: '700',
   800: '800',
   900: '900',
  },
  lineHeight: {
   n: 'normal',
  },
 },
 plugins: [],
};
