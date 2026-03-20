# Design System Document: The Oceanic High-Tech Editorial

## 1. Overview & Creative North Star: "The Digital Deep"
The core philosophy of this design system is **"The Digital Deep."** It moves away from the flat, predictable grids of standard corporate insurance sites and instead embraces the fluid, layered nature of water and glass. 

We are not just selling insurance; we are providing a high-tech sanctuary for AI and tech risk. The "North Star" is a sophisticated, editorial-inspired experience that uses **intentional asymmetry** and **depth-of-field** to guide the eye. By layering semi-transparent surfaces and utilizing high-contrast typography, we create a UI that feels both authoritative and cutting-edge. We break the template by allowing elements to overlap, using large-scale typography as a structural anchor, and treating the viewport as a three-dimensional space.

---

## 2. Colors: Tonal Depth & Luminous Accents
Our palette is rooted in the deep sea, punctuated by the electric glow of technological progress.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid, high-contrast borders for sectioning. Boundaries must be defined solely through:
1.  **Background Color Shifts:** A `surface-container-low` section sitting on a `background` base.
2.  **Tonal Transitions:** Moving from `surface` to `surface-bright` to define a header or footer area.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the surface tiers to create "nested" depth:
*   **Base:** `surface` (#00142b) for the primary page background.
*   **Sectioning:** `surface-container-low` (#001c3a) for secondary content blocks.
*   **Primary Interaction:** `surface-container-high` (#0e2b4b) for cards and modals.
*   **Maximum Contrast:** `surface-container-highest` (#1b3656) for navigation or urgent call-outs.

### The "Glass & Gradient" Rule
To achieve the "High-Tech" feel, floating elements (Navigation, Hovering Cards) must utilize **Glassmorphism**. Use `surface-variant` with a `backdrop-filter: blur(12px)` and an opacity of 60-80%. 

### Signature Textures
Main CTAs and Hero backgrounds should not be flat. Use subtle linear gradients transitioning from `primary` (#c3f5ff) to `primary-container` (#00e5ff) at a 135-degree angle to mimic light refracting through oceanic depths.

---

## 3. Typography: The Editorial Edge
We use a dual-font system to balance tech-forwardness with professional trustworthiness.

*   **Display & Headlines (Manrope):** Chosen for its modern, geometric construction. Use `display-lg` (3.5rem) with `-0.02em` letter-spacing for high-impact editorial statements. Headlines should feel "heavy" and grounded.
*   **Title & Body (Inter):** A workhorse for scannability. Use generous tracking (`0.01em`) on `body-lg` to ensure the text feels premium and breathable.
*   **Hierarchy as Identity:** Use extreme scale differences. A `display-lg` headline paired with a `label-md` category tag creates an "Editorial" look that suggests curation and high-level thought leadership.

---

## 4. Elevation & Depth: Tonal Layering
We do not use structural lines; we use light and shadow.

*   **The Layering Principle:** Stacking tiers creates natural lift. Place a `surface-container-lowest` card on a `surface-container-low` section. The subtle difference in hex code is enough to signal a container without visual clutter.
*   **Ambient Shadows:** For floating elements, use `on-surface` as the shadow color at **4% opacity** with a `40px` blur. This creates a soft, ambient glow rather than a harsh "drop shadow."
*   **The "Ghost Border" Fallback:** If a container needs more definition (e.g., in high-risk AI data visualizations), use a "Ghost Border": `outline-variant` (#3b494c) at **20% opacity**.
*   **Glassmorphism Depth:** When using glass overlays, ensure the `on-surface` text remains legible by using a subtle `text-shadow` or ensuring the `backdrop-blur` is high enough to negate background noise.

---

## 5. Components: Fluid Primitives

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary-container`), `on-primary` text, `full` roundedness. No border.
*   **Secondary:** Glassmorphism style. `surface-variant` (50% opacity) with a `ghost border`.
*   **Tertiary:** No background. Underline using `primary` at 2px height, offset by `spacing.1`.

### Cards & Lists
*   **The "No-Divider" Rule:** Forbid 1px divider lines. Separate list items using `spacing.4` of vertical white space or by alternating background tones between `surface-container-low` and `surface-container-medium`.
*   **Card Interaction:** On hover, a card should shift from `surface-container-high` to `surface-bright` and increase its `backdrop-blur` intensity.

### Input Fields
*   **Style:** Minimalist. `surface-container-lowest` background with a bottom-only `outline-variant` (40% opacity). 
*   **State:** On focus, the bottom border glows with `primary-fixed-dim` and a subtle outer glow.

### Specialized Component: The "Risk Gauge"
Given the insurance context, use custom circular progress indicators with `tertiary` (#ffeac0) accents to highlight high-risk AI factors against the navy background.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical layouts. Align a headline to the left but place the body text in a 6-column span on the right to create "Editorial" tension.
*   **Do** use `spacing.16` or `spacing.20` for section margins. Premium feels like "breathing."
*   **Do** use `tertiary` colors for warning or "Risk" elements—the warm gold provides a high-end contrast to the oceanic blues.

### Don't:
*   **Don't** use 100% opaque borders. They break the "fluid glass" illusion.
*   **Don't** use standard shadows. If it looks like a default Material Design shadow, it's too heavy.
*   **Don't** crowd the interface. If you can't fit it with `spacing.8` between elements, remove the element.
*   **Don't** use pure black. Always use `surface` (#00142b) to keep the "Oceanic" depth consistent.