# Relayout

Compose responsive interfaces from four layouts and a few modifiers, without media queries.

Relayout handles structure, spacing and boundaries: how elements sit in a row or a column, how far apart they are,
and which one takes the space the others leave. Colors, typography and styling stay with your own CSS, so it works
in any project, design system or framework, as CSS classes, as web components, or both.

```html
<header class="rl-row rl-justify-between rl-gap-l rl-padding-l">
    <strong>Acme</strong>
    <nav class="rl-row rl-gap-l">
        <a href="#">Product</a>
        <a href="#">Pricing</a>
        <a href="#">Docs</a>
    </nav>
</header>
```

The name sits on the left and the links on the right. Narrow the page and the links wrap under the name.

## Installation

```bash
npm install @relayoutui/relayout
```

Or load the CSS from a CDN, in the `<head>`:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@relayoutui/relayout@0.3.0/dist/css/relayout.css" />
```

Name the version you use: a release can rename classes.

## Layouts

A layout sets the direction. Each element has one.

| Class | Arranges |
|---|---|
| `rl-column` | Elements one under another, with even spacing |
| `rl-row` | Elements side by side, wrapping onto the next line when they don't fit |
| `rl-grid` | Cells of equal width, as many per line as fit |
| `rl-frame` | Content centered in the space of its parent |
| `rl-divider` | A line between elements |

## Modifiers

Modifiers go on the same element and set the rest.

| Classes | Set |
|---|---|
| `rl-gap-*`, `rl-padding-*` | The space between elements, and inside the layout, on a scale from `xs` to `2xl` |
| `rl-border`, `rl-radius-*` | A border, and rounded corners |
| `rl-align-*`, `rl-justify-*` | Where elements sit across the layout, and along it |
| `rl-width-*`, `rl-center-self` | A maximum width, and centering in the parent |
| `rl-width-fill`, `rl-height-fill`, `rl-height-full` | An element that takes the space the others leave |
| `rl-scroll` | The area that scrolls |
| `rl-nowrap`, `rl-nowrap-scroll`, `rl-wrap-reverse` | How a row wraps |

## Web components

Each layout is also a web component, and a modifier is an attribute with the class's name:

```html
<rl-column rl-width-m rl-center-self>...</rl-column>
```

## Documentation

Guides for each layout and modifier, and recipes for headers, sidebars and app shells:
[relayoutui.github.io/pages/docs](https://relayoutui.github.io/pages/docs/)

---

Licensed under the MIT License. See [LICENSE](LICENSE) for full terms.
