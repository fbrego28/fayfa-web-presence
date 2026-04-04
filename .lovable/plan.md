

## Add Image Gallery to Rental Equipment Cards

Yes, this is absolutely possible. When a user taps on any equipment card (e.g., "Camión Recolector de Basura"), a dialog/lightbox will open showing photos of that specific unit.

### How it will work

1. **Modify `Rentals.tsx`** — Add an `images` array field to each unit in the data. Each card becomes clickable.

2. **Image Lightbox** — Use the existing Radix `Dialog` component to create a fullscreen gallery overlay. Inside, use a simple carousel (prev/next arrows) to browse multiple photos per unit.

3. **Structure per unit**:
   - User taps a card → Dialog opens with the unit's name as title
   - Shows images in a carousel/slideshow with navigation arrows
   - Close button to dismiss

4. **Images** — You'll upload the photos for each unit through chat. I'll wire them directly into the corresponding unit's `images` array.

### Technical details

- **No new dependencies needed** — will use the existing `Dialog` component + simple state-based image carousel
- **Files modified**: `src/components/Rentals.tsx`
- **Mobile-friendly**: swipe-friendly layout, large tap targets for navigation

### Next step

Send me the images grouped by equipment (e.g., "these are for Camión Recolector 2002", "these for Mini Cargador", etc.) and I'll wire everything up.

