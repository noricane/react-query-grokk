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
      screens: {
				'utxl': {'max':'1423px'},
				'utlg': {'max':'1023px'},
				'utmd': {'max':'767px'},
				'utsm': {'max':'639px'},
				'utxs': {'max':'479px'},
				'xs': {'min':'480px'},
			  },
      fontFamily: {

        OldEnglishFive: ["OldEnglishFive", "cursive"],
      },  
    },
  },
  plugins: [],
}
export default config
