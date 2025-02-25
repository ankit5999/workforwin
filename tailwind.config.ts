import type { Config } from "tailwindcss";

export default {
  darkMode: ['class'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        appGreen: {
          900: "#389295",
          800: "#03989E",
          300: "#c7e1e3",
          200: "#cadada",
          100: "#ECFDF3"
        },
        appNavy: {
          800: "#100249"
        },
        appOrange: {
          900: "#fd6c3e",
          800: "#f68649",
          700: "#fba272",
        },
        appBrown:{
          800: "#f4f5ef"
        },
        appSkyBlue: {
          900: "#237DEC",
          800: "#529CF9",
          700: "#25A5E6",
          600: "#00D8FF",
          200: "#58A6FF",
          100: "#e7f7fd"
        },
        appPurple: {
          900: "#754ffe",
          800: "#8b5cf6",
          700: "#8C7CFF",
          600: "#8b3dff",
        },
        appIndigo: {
          900: "#3c0f78",
          100: "#f2f0ff"
        },
        appLightGray: {
          900: "#e1e4e7",
          800: "#f2f3f5",
          700: "#0d1216b3"
        },
        appLight: {
          900: "#d0dfff",
          800: "#C9D1D9",
          500: "#F4f4f4",
          400: "#F1F3F4",
          300: "#fbfbfd",
          200: "#f3f4f6",
          100: "#f5f7fb",
        },
        appDark: {
          900: "#0D1117",
          800: "#161B22",
          300: "#1E2229",
          200: "#1f2937",
          100: "#263238",
        },
        appGray: {
          700: "#707073",
          100: "#f9fafc"
        },
        appPink: {
          800: "#FF4264",
          700: "#F16565",
          600: "#ED5FB8",
          500: "#E28086",
          100: "#F4BEEF",
        },
        appYellow: {
          900: "#fbbd01",
          800: "#FF964B",
          700: "#E67E03",
          200: "#fdbc68",
          100: "#FFC42C"
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
} satisfies Config;
