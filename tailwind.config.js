const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'phone': '375px',
      'tablet': '768px',
      'desktop': '1440px'
    },
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif']
    },
    colors: {
      fg: {
        primary: {
          DEFAULT: colors.neutral[900],
          hover: colors.neutral[950],
          invert: colors.white,
        },
        secondary: {
          DEFAULT: colors.neutral[600],
        },
        tertiary: {
          DEFAULT: colors.neutral[500]
        },
        brand: {
          DEFAULT: colors.indigo[700]
        },
        disabled: {
          DEFAULT: colors.neutral[400]
        },
        error: {
          DEFAULT: colors.red[600],
          emphasize: colors.red[800]
        },
        success: {
          DEFAULT: colors.green[700]
        },
        warning: {
          DEFAULT: colors.amber[700]
        }
      },
      bg: {
        primary: {
          DEFAULT: colors.white,
          inverted: colors.neutral[950],
          hover: colors.neutral[50]
        },
        secondary: {
          DEFAULT: colors.gray[200],
          hover: colors.gray[300]
        },
        tertiary: {
          DEFAULT: colors.neutral[50]
        },
        disabled: {
          DEFAULT: colors.neutral[100],
          emphasize: colors.gray[100]
        },
        brand: {
          primary: {
            DEFAULT: colors.indigo[700],
            emphasize: colors.indigo[800]
          },
          subtle: colors.indigo[50]
        },
        error: {
          DEFAULT: colors.red[600],
          emphasize: colors.red[700],
          subtle: colors.red[50]
        },
        success: {
          subtle: colors.green[50]
        },
        neutral: {
          subtle: colors.gray[50]
        },
        warning: {
          subtle: colors.amber[50]
        }
      },
      line: {
        primary: {
          DEFAULT: colors.neutral[200]
        },
        secondary: {
          DEFAULT: colors.gray[400]
        },
        success: {
          DEFAULT: colors.green[200]
        },
        brand: {
          solid: colors.indigo[600],
          subtitle: colors.indigo[200]
        },
        error: {
          subtle: colors.red[200]
        },
        warning: {
          subtle: colors.amber[200]
        }
      },
      icon: {
        emphasize: {
          DEFAULT: colors.neutral[700],
        },
        primary: {
          DEFAULT: colors.neutral[400],
          hover: colors.neutral[500]
        },
        brand: {
          DEFAULT: colors.indigo[500],
          background: colors.indigo[50]
        },
        success: {
          DEFAULT: colors.green[700]
        },
        error: {
          DEFAULT: colors.red[600]
        },
        warning: {
          DEFAULT: colors.yellow[400]
        }
      },
      field: {
        title: colors.neutral[700],
        placeholder: colors.neutral[500],
        hint: colors.neutral[500],
        filled: colors.neutral[900],
        disabled: colors.neutral[400],
        error: colors.red[600],
        background: colors.neutral[50],
        border: colors.neutral[200]
      }
    },
    extend: {
      boxShadow: {
        'card': '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)'
      },
      backgroundImage: {
        'bg-gradient': 'linear-gradient(to bottom right, #F9FAFB 0%, #D2D6DB 100%)'
      }
    },
  },
  plugins: [],
}