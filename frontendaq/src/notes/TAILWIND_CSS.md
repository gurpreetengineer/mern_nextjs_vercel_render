# 🧰 Tailwind CSS Utility Cheat Sheet

A practical reference sheet for working with Tailwind CSS in your Next.js or any frontend project.

---

## 🔲 Layout

| Category   | Pattern                                | Examples / Values                      |
|------------|----------------------------------------|----------------------------------------|
| display    | block, inline-block, flex, grid, hidden, inline-flex | — |
| position   | relative, absolute, fixed, sticky      | —                                      |
| z-index    | z-{0,10,20,...,50}, z-auto             | —                                      |
| overflow   | overflow-{auto, hidden, scroll, visible} | —                                   |
| object-fit | object-{contain, cover, fill, scale-down} | —                                 |

---

## 📐 Spacing

| Type    | Pattern                       | Values                                |
|---------|-------------------------------|----------------------------------------|
| padding | p-*, px-*, py-*, pl-* etc.    | 0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 64, 96, 128 |
| margin  | m-*, mx-*, my-*, mt-*, etc.   | same as above                         |
| gap     | gap-*, gap-x-*, gap-y-*       | same as above                         |
| space   | space-x-*, space-y-*          | adds spacing between child elements   |

---

## 📏 Sizing

| Type      | Pattern                          | Values                                 |
|-----------|----------------------------------|----------------------------------------|
| width     | w-*                              | 1-96, full, screen, auto, 1/2, 1/3, 3/4, min, max, fit |
| height    | h-*                              | Same values as width                   |
| min/max   | min-w-*, max-w-*, min-h-*, etc.  | —                                      |

---

## 📊 Typography

| Property       | Pattern                                 | Examples                              |
|----------------|------------------------------------------|----------------------------------------|
| Font Size      | text-xs, text-sm, text-base, ..., text-9xl | —                                  |
| Font Weight    | font-thin to font-black                 | —                                      |
| Text Align     | text-left, text-center, text-right, text-justify | —                             |
| Line Height    | leading-none, leading-tight, ..., leading-loose | —                             |
| Letter Spacing | tracking-tight, tracking-wide, tracking-wider | —                              |
| Text Transform | uppercase, lowercase, capitalize, normal-case | —                               |

---

## 🎨 Colors & Backgrounds

| Category       | Pattern                                   | Values                                |
|----------------|--------------------------------------------|----------------------------------------|
| text color     | text-{color}-{shade}                      | e.g. text-blue-500, text-gray-700     |
| background     | bg-{color}-{shade}                        | e.g. bg-red-100, bg-green-600         |
| border color   | border-{color}-{shade}                    | —                                      |
| hover/focus    | hover:bg-*, focus:*                       | —                                      |
| gradient       | bg-gradient-to-{t, r, b, l}, from-*, to-* | —                                      |
| opacity        | opacity-0 to opacity-100 (steps of 5 or 10) | —                                    |

---

## ✏️ Borders & Radius

| Property | Pattern                                          | Values                                |
|----------|--------------------------------------------------|----------------------------------------|
| Border   | border, border-2, ..., border-8, border-t, etc. | —                                      |
| Radius   | rounded, rounded-md, rounded-lg, etc.           | —                                      |
| Divide   | divide-x, divide-y, divide-gray-200, etc.       | —                                      |

---

## 🌬️ Flex & Grid

### FLEX

| Pattern         | Examples                                  |
|-----------------|--------------------------------------------|
| flex, inline-flex | —                                     |
| flex-row, flex-col, flex-wrap | —                         |
| justify-*       | justify-center, justify-between, etc.     |
| items-*         | items-center, items-start, items-end      |
| gap-*           | Adds spacing between flex/grid items      |

### GRID

| Pattern         | Examples                                  |
|-----------------|--------------------------------------------|
| grid, grid-cols-1 to grid-cols-12 | —                       |
| col-span-*, row-span-*           | col-span-3, row-span-2   |
| gap-*, grid-rows-*               | —                        |

---

## 🧪 Effects & Transitions

| Type       | Pattern                                         | Values                                |
|------------|--------------------------------------------------|----------------------------------------|
| shadow     | shadow, shadow-md, shadow-lg, shadow-2xl, etc. | —                                      |
| transition | transition, transition-all, transition-opacity | Add duration-* & ease-*               |
| duration   | duration-75 to duration-1000                   | —                                      |
| ease       | ease-linear, ease-in-out, etc.                 | —                                      |
| transform  | scale-*, rotate-*, translate-*                 | —                                      |

---

## 🖥️ Responsive Prefixes

| Prefix | Breakpoint |
|--------|------------|
| sm:    | ≥ 640px    |
| md:    | ≥ 768px    |
| lg:    | ≥ 1024px   |
| xl:    | ≥ 1280px   |
| 2xl:   | ≥ 1536px   |

---

## 🧠 State & Condition Prefixes

| Prefix       | Meaning            |
|--------------|--------------------|
| hover:       | On hover           |
| focus:       | On input focus     |
| disabled:    | When disabled      |
| active:      | While active       |
| group-hover: | On group hover     |
