

## Plan: Redesign Landing Page with Premium Video Hero

### What changes
Replace the current dark industrial-themed Hero and Header with a clean, modern, premium design featuring a full-screen video background and minimalist typography.

### Files to modify

1. **`src/components/Hero.tsx`** -- Complete rewrite:
   - Full-screen video background (CloudFront URL, autoplay, muted, loop, playsInline, object-cover)
   - Centered hero content with overlapping heading effect ("Alquiler y Repuestos" / "Para Camiones.")
   - "CAMIONES" uppercase label, subtitle, two CTA buttons (Discover + Book Now)
   - Uses Inter font, light/gray color palette over the video

2. **`src/components/Header.tsx`** -- Redesign to match:
   - Clean nav with "Fayfa" brand name (gray-900 tones)
   - Desktop links: Start, Story, Rates, Benefits, FAQ
   - Mobile hamburger with slide-down menu (white/95 backdrop blur)
   - Max-width 7xl, px-8 py-6 spacing
   - Remove fixed positioning dark background, use transparent overlay style

3. **`src/index.css`** -- Minor updates:
   - Ensure Inter font import is present (already imported)
   - Add any needed utility classes for the overlap effect

4. **`src/App.css`** -- Remove or clean up the old Vite boilerplate styles (max-width constraint on #root conflicts with full-screen hero)

### What stays the same
- All sections below the hero (Repairs, Rentals, Parts, Carriages, FAQ, Contact, Footer) remain unchanged
- WhatsApp float stays
- The existing dark theme CSS variables stay (used by other sections)

### Reversibility
All changes can be reverted using Lovable's history/revert feature as discussed.

