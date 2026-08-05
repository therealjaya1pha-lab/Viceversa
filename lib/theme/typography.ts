export const typography = {
  fontFamily: {
    sans: "var(--font-sans), 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
    serif: "var(--font-serif), 'Playfair Display', Georgia, serif",
    script: "var(--font-script), 'Caveat', cursive, sans-serif",
  },
  fontSize: {
    hero: "clamp(2.25rem, 4.5vw + 1rem, 3.75rem)",
    h1: "clamp(1.875rem, 3.5vw + 0.875rem, 2.75rem)",
    h2: "clamp(1.5rem, 2.5vw + 0.75rem, 2.25rem)",
    h3: "clamp(1.25rem, 1.8vw + 0.625rem, 1.75rem)",
    h4: "clamp(1.125rem, 1.2vw + 0.625rem, 1.375rem)",
    sub: "clamp(1rem, 1vw + 0.75rem, 1.25rem)",
    body: "clamp(0.9375rem, 0.75vw + 0.75rem, 1.0625rem)",
    sm: "clamp(0.8125rem, 0.4vw + 0.7rem, 0.875rem)",
    xs: "0.75rem",
  },
  fontWeight: {
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
  },
  lineHeight: {
    none: "1",
    hero: "1.1",
    tight: "1.15",
    snug: "1.25",
    normal: "1.5",
    relaxed: "1.65",
  },
  letterSpacing: {
    tighter: "-0.025em",
    tight: "-0.022em",
    snug: "-0.015em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  // Semantic Class Maps matching CSS utility classes in globals.css
  styles: {
    hero: "text-fluid-hero font-extrabold text-[#1E293B]",
    h1: "text-fluid-h1 font-extrabold text-[#1E293B]",
    h2: "text-fluid-h2 font-bold text-[#1E293B]",
    h3: "text-fluid-h3 font-bold text-[#1E293B]",
    sub: "text-fluid-sub font-medium text-slate-600",
    body: "text-fluid-body font-normal text-slate-700 leading-relaxed",
    caption: "text-fluid-sm font-normal text-slate-500",
    scriptBadge: "font-script text-2xl text-[#9C1D38]",
    serifDisplay: "font-serif-brand font-bold text-[#1E293B]",
  },
} as const;

export type TypographyConfig = typeof typography;
