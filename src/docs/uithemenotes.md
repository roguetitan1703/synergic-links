# UI Theme Notes

## Global

- **Font**: Use `font-sans` for most text, `font-mono` for code or data-related elements.
- **Colors**:
  - `primary` (#1B3A57): For headings, brand elements, hero backgrounds
  - `secondary` (#5E3A9A): Accents in hero, about section gradient
  - `accent` (#FFD700): CTA buttons, small highlights, icons
  - `darkBg` (#121212): Section backgrounds, e.g., testimonials, or entire site background if going dark
  - `textLight` (#EAEAEA): Body text, subheadings
  - **Hover states**: `accent-hover`, `purple-hover`, `blue-hover` for subtle color changes on hover

## Hero Section

- **Background**: `bg-hero-gradient` for subtle blend of primary/purple
- **Headline**: Large serif in gold (`text-accent`), bold and big
- **Subtext**: Use `text-textLight` on top of dark gradient
- **CTA**: `bg-accent text-primary`, with `hover:bg-accent-hover`

## About Section

- **Background**: Could use `bg-about-gradient` or `bg-secondary` with `bg-primary` in combination
- **Gold-Accented Graphics**: Use gold lines, icons, or highlights
- **Minimalist UI**: Keep it spaced and use `text-textLight` for body paragraphs

## Services Section

- **Grid Layout**: Cards with `bg-darkBg` or `bg-primary` if the overall background is lighter
- **Hover Effects**: Card glows in violet (`bg-purple-hover`) or gold (`bg-accent-hover`)
- **Service Titles**: `text-accent` or `text-secondary`, bold

## Testimonials / Case Studies

- **Background**: `bg-darkBg` to stand out
- **Text**: `text-textLight` with gold highlights for names or important phrases
- **Hover**: Subtle glow effect (`animation: glow`) or `hover:scale-105`

## Contact & Inquiry Section

- **Form**: White input fields (`bg-light-bg text-primary`) on a `bg-hero-gradient` or `bg-about-gradient`
- **CTA Button**: Gold & black combo (`bg-accent text-darkBg`), `hover:bg-accent-hover`
- **Ensure**: Enough contrast between form elements and background

## Additional Features

- **Subtle Hover Effects**: For all clickable items, add transitions (`transition duration-300`)
- **Animated Elements**:
  - Floating data streams: Could use `animation: fadeIn` or `animation:
