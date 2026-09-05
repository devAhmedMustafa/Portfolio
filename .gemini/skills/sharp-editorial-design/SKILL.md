---
name: sharp-editorial-design
description: Design system guidelines and Tailwind CSS specifications for a high-contrast, sharp-edged modern editorial portfolio style with exact color palettes and component patterns.
---

# Sharp Editorial Design System

A high-contrast, minimalist, modern editorial / sharp brutalist visual language designed for portfolios, agency sites, and editorial digital products. It features bold typography, crisp hairline dividers, deep charcoal surfaces paired with stark white canvas, vivid status accents, and strict **sharp-edged (0px border-radius)** geometry.

---

## 🎨 Exact Color Palette

| Token Name | Hex Code | Tailwind Equivalent | Usage / Application |
| :--- | :--- | :--- | :--- |
| **Canvas Pure White** | `#FFFFFF` | `bg-white` | Main body background, collapsed card backgrounds |
| **Atmospheric Soft Gray** | `#F8F9FA` / `#F4F5F6` | `bg-zinc-50` / `bg-gray-50` | Subtle atmospheric background textures, soft hover states |
| **Dark Charcoal / Black** | `#09090B` / `#121212` | `bg-zinc-950` / `bg-black` | Solid hero text, primary sharp buttons, dark surfaces |
| **Dark Accordion Surface**| `#18181B` / `#27272A` | `bg-zinc-900` / `bg-zinc-800` | Expanded service/accordion item card background |
| **Primary Text** | `#09090B` | `text-zinc-950` | Primary headings, button labels, main body text |
| **Muted Text** | `#71717A` | `text-zinc-500` | Subtitles, descriptions, bracketed counters (`[40]`) |
| **Inverted Body Text** | `#FFFFFF` | `text-white` | Headings and primary text on dark charcoal surfaces |
| **Inverted Muted Text** | `#A1A1AA` | `text-zinc-400` | Secondary text on dark charcoal surfaces |
| **Hairline Border Gray** | `#E4E4E7` / `#E5E7EB` | `border-zinc-200` | Horizontal section dividers, input outlines, card borders |
| **Active Green Accent** | `#10B981` | `bg-emerald-500` | "Available for New Project" live status indicator dot |

---

## 📐 Geometric Rule: Sharp Edges (`rounded-none`)

Unlike standard pill-shaped or rounded modern UI designs, **this design system enforces 100% sharp corners**.

- **Border Radius**: `0px` (`rounded-none` in Tailwind CSS).
- **Buttons & Tags**: Rectangular box shapes with sharp $90^\circ$ corners.
- **Pills / Badges**: Rendered as sharp rectangular badges (`px-3 py-1.5 border border-zinc-200 rounded-none`).
- **Cards & Accordions**: Crisp rectangular containers with sharp hairline borders.
- **Avatars & Media**: Rectangular cutouts without rounded borders.

---

## 🔤 Typography & Text Styles

- **Font Family**: Modern clean sans-serif (e.g., *Inter*, *Plus Jakarta Sans*, *Space Grotesk*, or *Syne*).
- **Display Hero Header**:
  - Combined Solid & Outlined text style (e.g. `DYMAS ALFIN`).
  - **Outlined Text**: `text-transparent [-webkit-text-stroke:2px_#09090B] font-extrabold uppercase`.
  - **Solid Text**: `text-zinc-950 font-extrabold uppercase`.
- **Section Headers**:
  - Prefixed with forward slash `/`: e.g. `/SERVICE`, `/WORK`, `/EXPERIENCE`.
  - Uppercase, tracking tight, font weight bold (`tracking-wider text-xl font-bold uppercase`).
- **Bracketed Counters**:
  - Navigation & category items include bracketed counts in muted text: `Work [40]`, `Service [4]`, `Experience [9y+]`.
- **Action Icons**:
  - Up-right arrow icon (`↗` or `<LucideArrowUpRight />`) appended to links, buttons, and row items.

---

## 🧩 Component Patterns & Specifications

### 1. Top Navigation & Sharp Status Badge
- **Container**: `flex justify-between items-center py-6 border-b border-zinc-200 bg-white`
- **Availability Badge**:
  - Sharp rectangle with status light dot: `flex items-center gap-2 px-3 py-1.5 border border-zinc-200 bg-white rounded-none text-sm font-medium`
  - Live Dot: `h-2.5 w-2.5 rounded-none bg-emerald-500` (or sharp square dot).
- **CTA Button**:
  - `bg-zinc-950 text-white px-5 py-2 text-sm font-medium rounded-none flex items-center gap-2 hover:bg-zinc-800 transition-colors`

### 2. Hero Section
- **Typography Stack**:
  - Oversized headline: `text-6xl md:text-8xl font-black tracking-tight text-zinc-950 uppercase`
  - Mixed stroke effect: `<span class="text-transparent [-webkit-text-stroke:2px_#09090B]">DYMAS</span> ALFIN`
- **Tagline Subtext**:
  - `text-zinc-600 text-lg max-w-md`
- **Social Link Grid**:
  - Sharp border containers: `border border-zinc-200 px-4 py-2 text-sm font-medium rounded-none flex items-center justify-between hover:border-zinc-950 transition-colors`

### 3. Accordion Service List (`/SERVICE`)
- **Container**: `w-full border-t border-zinc-200`
- **Collapsed Item**:
  - `flex items-center justify-between py-8 border-b border-zinc-200 bg-white hover:bg-zinc-50 transition-colors cursor-pointer px-4`
  - Title: `text-3xl md:text-4xl font-bold tracking-tight uppercase text-zinc-950`
  - Icon: Arrow up-right `↗` (`text-zinc-950 w-6 h-6`)
- **Expanded Active Item**:
  - `bg-zinc-900 text-white p-8 md:p-12 rounded-none border border-zinc-900 my-2 flex justify-between items-start relative`
  - Title: `text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4`
  - Subtitle / Content: `text-zinc-400 text-base max-w-lg`
  - Close Icon: `X` button on top right (`text-zinc-400 hover:text-white`)

---

## 🛠️ Tailwind CSS Configuration Snippet

```js
// tailwind.config.js / CSS variables setup
module.exports = {
  theme: {
    extend: {
      colors: {
        canvas: '#FFFFFF',
        surface: {
          light: '#F8F9FA',
          dark: '#18181B',
          darker: '#09090B',
        },
        border: {
          subtle: '#E4E4E7',
          dark: '#27272A',
        },
        status: {
          active: '#10B981',
        }
      },
      borderRadius: {
        DEFAULT: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        full: '0px', // Forces all full/pill rounded elements to sharp edges
      }
    }
  }
}
```

---

## 💡 Example Svelte 5 Component Template

```svelte
<script lang="ts">
  let isAvailable = $state(true);
  let activeService = $state('UIUX DESIGN');

  const services = [
    { title: 'UIUX DESIGN', desc: 'Designing clear and scalable interfaces for dashboards, mobile apps, and websites.' },
    { title: 'WEB DESIGN & DEV', desc: 'Building high performance, responsive websites with modern stacks.' },
    { title: 'BRANDING', desc: 'Crafting unique visual identities and brand guidelines.' },
    { title: 'MOTIONS & ANIMATIONS', desc: 'Creating subtle micro-interactions and smooth page transitions.' }
  ];
</script>

<div class="min-h-screen bg-white text-zinc-950 font-sans selection:bg-zinc-950 selection:text-white">
  <!-- Navigation Bar -->
  <header class="flex justify-between items-center px-8 py-6 border-b border-zinc-200">
    <div class="flex items-center gap-2 px-3 py-1.5 border border-zinc-200 bg-white rounded-none">
      <span class="h-2.5 w-2.5 bg-emerald-500 inline-block"></span>
      <span class="text-xs font-medium uppercase tracking-wider text-zinc-700">Available for New Project</span>
    </div>

    <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-800">
      <a href="#work" class="hover:text-black">Work <span class="text-zinc-400">[40]</span></a>
      <a href="#service" class="hover:text-black">Service <span class="text-zinc-400">[4]</span></a>
      <a href="#experience" class="hover:text-black">Experience <span class="text-zinc-400">[9y+]</span></a>
      <a href="#contact" class="hover:text-black">Contact</a>
    </nav>

    <button class="bg-zinc-950 text-white px-5 py-2 text-sm font-medium rounded-none hover:bg-zinc-800 transition-colors flex items-center gap-2">
      Let's Talk <span>↗</span>
    </button>
  </header>

  <!-- Hero Section -->
  <section class="px-8 py-20">
    <h1 class="text-7xl md:text-9xl font-extrabold uppercase tracking-tight text-zinc-950">
      <span class="text-transparent [-webkit-text-stroke:2px_#09090B]">DYMAS</span> ALFIN
    </h1>

    <div class="mt-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
      <div class="max-w-md">
        <h2 class="text-2xl font-bold text-zinc-950 mb-2">UI/UX Designer</h2>
        <p class="text-zinc-500 text-base leading-relaxed">
          Designing digital products that are clear, usable, and conversion focused.
        </p>
        <button class="mt-6 bg-zinc-950 text-white px-6 py-3 text-sm font-medium rounded-none flex items-center gap-2 hover:bg-zinc-800 transition-colors">
          Let's collaborate ↗
        </button>
      </div>
    </div>
  </section>

  <!-- Services Accordion Section -->
  <section class="px-8 py-16 border-t border-zinc-200">
    <h3 class="text-sm font-bold uppercase tracking-widest text-zinc-950 mb-8">/SERVICE</h3>

    <div class="flex flex-col border-b border-zinc-200">
      {#each services as item}
        {#if activeService === item.title}
          <!-- Expanded Dark Card -->
          <div class="bg-zinc-900 text-white p-8 md:p-10 rounded-none my-2 border border-zinc-900 flex justify-between items-start transition-all">
            <div>
              <h4 class="text-3xl md:text-4xl font-bold uppercase tracking-tight text-white mb-3">{item.title}</h4>
              <p class="text-zinc-400 text-sm max-w-md leading-relaxed">{item.desc}</p>
            </div>
            <button onclick={() => activeService = ''} class="text-zinc-400 hover:text-white p-2 text-xl">
              ✕
            </button>
          </div>
        {:else}
          <!-- Collapsed Light Row -->
          <button 
            onclick={() => activeService = item.title} 
            class="w-full flex justify-between items-center py-6 border-t border-zinc-200 bg-white hover:bg-zinc-50 transition-colors px-2 text-left"
          >
            <span class="text-2xl md:text-3xl font-bold uppercase tracking-tight text-zinc-950">{item.title}</span>
            <span class="text-xl text-zinc-950">↗</span>
          </button>
        {/if}
      {/each}
    </div>
  </section>
</div>
```
