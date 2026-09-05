---
name: editorial-motion-system
description: Motion design principles, animation hierarchy, entrance sequences, and micro-interactions for high-contrast editorial portfolio websites.
---

# Editorial Motion System & Animation Guidelines

A precise, disciplined, editorial motion system designed for high-contrast, minimalist portfolio websites. The motion language prioritizes strong alignment, linear/subtle easing, clipped mask reveals, and quiet micro-interactions over playful or bouncy effects.

---

## 1. Core Motion Personality & Hierarchy

- **Personality**: Controlled, precise, linear/subtle easing, short travel distances, strong grid alignment.
- **Avoid**: Bounce, overshoot, elastic easing, random floating, or unnecessary movement.

### Animation Timing Hierarchy
| Category | Duration Range | Easing / Characteristics |
| :--- | :--- | :--- |
| **Large Visual / Typography** | `600ms — 900ms` | `cubic-bezier(0.16, 1, 0.3, 1)` or linear transition |
| **Section Transitions** | `500ms — 700ms` | Directional mask reveal |
| **Content Reveals** | `400ms — 600ms` | Sequential vertical stagger (`translateY` + opacity or clipped) |
| **Hover Interactions** | `150ms — 250ms` | Quick, crisp response |
| **Buttons & Micro-interactions** | `120ms — 200ms` | Arrow diagonal translation (~6-8px) |

---

## 2. Hero Entrance Sequence (Phase 01 – Phase 03)

The hero entrance follows a strict 3-phase staggered sequence:

```
                  [empty space]

            AHMED   MUSTAFA   (Phase 01)
              →        ←

                portrait      (Phase 02)
                   ↓

      Software Engineer       (Phase 03)
      Designing & building...
```

- **Phase 01 — Typography Assembly (`600–800ms`)**:
  - `AHMED` slides `+30px` from left (`translateX(-30px)` $\to$ `translateX(0)`).
  - `MUSTAFA` slides `-30px` from right (`translateX(30px)` $\to$ `translateX(0)`).
  - Outlined `AHMED` and solid `MUSTAFA` join seamlessly on the baseline.
- **Phase 02 — Portrait Reveal (`700ms`)**:
  - Scale: `1.03` $\to$ `1.00`.
  - Opacity: `0` $\to$ `1`.
  - Starts slightly after typography begins assembling.
- **Phase 03 — Supporting Content Stagger (`400–600ms`)**:
  - Sequential reveal order: **Role** $\to$ **Description** $\to$ **CTA Button** $\to$ **Social Links**.

---

## 3. Micro-Interactions & Hover Behavior

- **Button Arrow Hover**:
  - Button text remains still.
  - Arrow icon translates `+6px` to `+8px` diagonally: `group-hover:translate-x-1.5 group-hover:-translate-y-1.5`.
- **Navigation Indicator**:
  - Stable index navigation with quiet active indicator dot (`●`) or clean hairline underline.
- **Portrait & Image Hover**:
  - Subtle tonal contrast shift (monochrome depth adjustment `filter: contrast(1.00) -> contrast(1.08)`).

---

## 4. Scroll Depth & Editorial Mask Reveals

- **Parallax Depth**:
  - Typography: `0.85x` scroll speed.
  - Portrait: `1.00x` scroll speed.
  - Background/Overlays: `1.05x` scroll speed.
- **Clipped Mask Reveals**:
  - Text reveals through overflow-hidden containers (`overflow-hidden` wrapper with `translateY(100%)` $\to$ `translateY(0)`).
- **Rhythm**:
  - Alternate between stillness and subtle movement (`STATIC` $\to$ `SUBTLE MOTION` $\to$ `STATIC`).
