# Color Scheme Update Plan

## Goal
Apply hero.tsx's color scheme (slate-400 labels, white text, white/black buttons) to all other pages

## Tasks

### 1. Update blog/page.tsx
- [ ] Replace `text-blue-400` section labels with `text-slate-400`
- [ ] Remove blue gradients from headings, use plain white text
- [ ] Update hover states to use `text-slate-400` instead of `text-blue-400`

### 2. Update projects/page.tsx
- [ ] Replace `text-blue-400` section labels with `text-slate-400`
- [ ] Remove blue gradient from main heading
- [ ] Update filter button selected state from `bg-blue-600` to match hero button style

### 3. Update contact.tsx
- [ ] Replace `text-blue-400` section label with `text-slate-400`
- [ ] Remove blue gradient from heading, use plain white text
- [ ] Change submit button from `bg-blue-600` to `bg-white text-black` (matching hero primary button)

## Color Reference from hero.tsx
- Background: `bg-black`
- Section labels: `text-slate-400`
- Primary text: `text-white`
- Secondary text: `text-white/70` or `text-white/60`
- Cards: `bg-white/5 border-white/10`, hover `bg-white/8`
- Primary button: `bg-white text-black`
- Outline button: `border-white/15 text-white`

