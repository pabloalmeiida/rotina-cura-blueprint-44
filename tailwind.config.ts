import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem", 
        md: "2rem",
        lg: "2rem",
        xl: "2rem"
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Cores da identidade visual - A Rotina que Cura - Nova Paleta
        "primary-blue": "hsl(var(--primary-blue))",
        "primary-cyan": "hsl(var(--primary-cyan))",
        "primary-green": "hsl(var(--primary-green))",
        "brand-teal": "hsl(var(--brand-teal))",
        "success-green": "hsl(var(--success-green))",
        "dark-text": "hsl(var(--dark-text))",
        "light-bg": "hsl(var(--light-bg))",
        "soft-gray": "hsl(var(--soft-gray))",
        "accent-gold": "hsl(var(--accent-gold))",
        "cream": "hsl(var(--cream))",
        "sage-green": "hsl(var(--sage-green))",
        "purple-accent": "hsl(var(--purple-accent))",
        "pink-accent": "hsl(var(--pink-accent))",
      },
      backgroundImage: {
        "gradient-hero": "var(--gradient-hero)",
        "gradient-section": "var(--gradient-section)",
        "gradient-cta": "var(--gradient-cta)",
        "gradient-banner": "var(--gradient-banner)",
        "gradient-elegant": "var(--gradient-elegant)",
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'trajan': ['Trajan Pro', 'serif'],
      },
      boxShadow: {
        "soft": "var(--shadow-soft)",
        "strong": "var(--shadow-strong)",
        "custom": "var(--shadow-custom)",
      },
      transitionTimingFunction: {
        "smooth": "var(--transition-smooth)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
