# Shay Charis Travel Solutions

A modern, responsive, high-performance landing page and web application for **Shay Charis Travel Solutions** based in Nairobi, Kenya.

---

## 📁 Project Architecture

The codebase is structured to be modular, readable, maintainable, and easily scalable as the business expands into multi-page destination guides, booking portals, or CMS integration:

```
shaycharis/
├── index.html                  # Semantic, accessible HTML5 homepage
├── assets/
│   ├── css/
│   │   ├── variables.css       # Design tokens (colors, typography, spacing, shadows)
│   │   ├── base.css            # CSS reset, global typography, container & layout utilities
│   │   ├── components.css      # Reusable UI elements (buttons, badges, ticket card, modals, toast)
│   │   ├── sections.css        # Section layouts (hero, about, services, why-us, values, contact, footer)
│   │   └── main.css            # Central CSS entry point
│   ├── js/
│   │   ├── config.js           # Central brand data, contacts, and service catalog
│   │   ├── navigation.js       # Sticky header, mobile drawer menu, scrollspy, smooth scrolling
│   │   ├── enquiry.js          # Interactive trip planner modal, WhatsApp generator, clipboard copy
│   │   └── main.js             # Scroll animations, event orchestration & bootstrap
│   └── images/                 # Image assets and graphics
├── design/                     # Reference design files
└── README.md                   # Project documentation
```

---

## 🎨 Design System & Brand Identity

- **Primary Colors**:
  - Deep Obsidian Teal: `#0B2B33` (Base dark, footer, deep contrast)
  - Brand Teal: `#17696A` (Contact accent, subheadings, vision accents)
  - Travel Gold / Amber: `#F4A62A` (CTA buttons, airport codes, sun motif)
  - Light Aqua Mint: `#EAF3F2` (Hero & Why Choose Us background)
  - Pure White: `#FFFFFF` (Surface backgrounds, cards)
- **Typography**:
  - Headings: `Bricolage Grotesque` (bold, contemporary, geometric grotesque)
  - Body & UI: `Hanken Grotesk` (clean, highly readable modern sans-serif)

---

## ✨ Features

1. **Pixel-Accurate Design Faithful to Source**:
   - Distinctive Arch Landscape Hero illustration featuring African savannah silhouettes, acacia tree, golden sun, and flight path.
   - Distinctive **Enquiry Boarding Pass** card with airport route (`NBO` Nairobi, Kenya → `Your next journey`), perforated divider with cutouts, and quick copy-to-clipboard functionality.
   - Airport code badges (`HOL`, `TRV`, `STY`, `TRF`, `COR`, `GRP`, `HNY`, `PKG`, `CNS`).
   - Audience pill tags for diverse traveller segments.
2. **Interactive Trip Planning**:
   - "Plan my trip" triggers an interactive modal that captures the traveler's name, requested service, destination idea, group size, and dates.
   - Automatically drafts and launches a formatted WhatsApp message to Shay Charis Travel Solutions (`+254-707144839`).
   - Clicking any service item in the list opens the planner with that specific service pre-selected.
3. **Responsive & Mobile-First**:
   - Adaptive layouts scaling seamlessly from 320px smartphones to 4K displays.
   - Native-feeling slide-in mobile navigation drawer with accessible hamburger toggle.
4. **Performance & Standards**:
   - Zero heavyweight external framework dependencies — pure vanilla HTML5, CSS3, and JavaScript.
   - Instant loading times and high Lighthouse performance.

---

## 🚀 How to Run Locally

You can serve the project using any standard HTTP server or open `index.html` directly:

### Using Python:
```bash
python3 -m http.server 8080
```
Then visit `http://localhost:8080` in your web browser.

### Using Node.js / npx:
```bash
npx serve .
```

---

## 🛠️ How to Extend & Scale

- **Updating Contact Information**: Modify `assets/js/config.js` to change telephone numbers, emails, or office locations.
- **Adding New Services**: Add an entry with `code`, `title`, and `description` in `assets/js/config.js` and add a corresponding `<article class="service-item">` in `index.html`.
- **Theme Color Customization**: Adjust CSS custom properties in `assets/css/variables.css`.
