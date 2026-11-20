// Tailwind CSS v3: Ironshade (Rotex family) theme. Merge into your tailwind.config.js.
// Load tokens/ironshade-tokens.css globally so the semantic `is-*` colors follow light/dark.
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["selector", "[data-theme=\"dark\"]"], // Tailwind >= 3.4.1
  theme: {
    extend: {
      colors: {
        graphite: { 950:'#0B0F1C', 900:'#10162A', 850:'#141B31', 800:'#1A2238', 700:'#283252', 600:'#3D4870', 500:'#5B6688', 400:'#7C88A8', 300:'#A9B3CC', 200:'#CDD4E4', 100:'#E8ECF4' },
        paper: { 50:'#F6F8FC' },
        rotor: { 300:'#FFD06B', 400:'#FFBE3B', 500:'#FFA81F', 600:'#E88A00', 700:'#B86A00', 800:'#8C4F00' }, // Rotor Amber (Rotex)
        shade: { 100:'#D6F6FD', 200:'#AEEEFC', 300:'#7FE3FA', 400:'#3FD0F2', 500:'#12B5DD', 600:'#0A93B8', 700:'#0B7593', 800:'#0A5B73', 900:'#073F51' }, // Shade Cyan (Ironshade)
        native: { 400:'#34D399', 700:'#0E7A55' },
        // semantic, theme-aware (from ironshade-tokens.css)
        is: {
          bg:'var(--is-bg)', raised:'var(--is-bg-raised)', surface:'var(--is-surface)', border:'var(--is-border)',
          text:'var(--is-text)', muted:'var(--is-text-muted)', subtle:'var(--is-text-subtle)',
          accent:'var(--is-accent)', 'accent-hover':'var(--is-accent-hover)', 'on-accent':'var(--is-on-accent)',
          link:'var(--is-link)', family:'var(--is-family)',
          native:'var(--is-native)', emulated:'var(--is-emulated)', absent:'var(--is-absent)',
          error:'var(--is-error)', warning:'var(--is-warning)', note:'var(--is-note)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Inter Variable', 'system-ui', 'sans-serif'],
        display: ['Inter Tight', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SF Mono', 'Menlo', 'monospace'],
      },
      fontSize: { xs:'0.75rem', sm:'0.875rem', base:'1rem', lg:'1.25rem', xl:'1.5625rem', '2xl':'1.953rem', '3xl':'2.441rem', '4xl':'3.052rem', '5xl':'3.815rem' },
      letterSpacing: { display:'-0.02em', label:'0.12em', wordmark:'0.11em' },
      borderRadius: { sm:'6px', md:'10px', lg:'16px', xl:'24px' },
      transitionTimingFunction: { rotor:'cubic-bezier(.2,.8,.2,1)' },
    },
  },
};
