# Relayout

Relayout takes the parts of flexbox and grid that position elements and applies them in a simple, repeatable,
predictable way.

Four layouts set the direction. Utilities adjust the positioning: gap, padding, alignment,
wrapping, scrolling and width. Optional extras add the fine touch.

Use it as CSS classes or as web components.

## Installation

```bash
npm install @relayoutui/relayout
```

Or load the CSS from a CDN, in the `<head>`:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@relayoutui/relayout@0.4.0/dist/css/relayout.css" />
```

## Example

```html
<header class="rl-row rl-justify-between rl-gap-l rl-padding-l">
    <span>Acme</span>
    <nav class="rl-row rl-gap-l">
        <a href="#">Product</a>
        <a href="#">Pricing</a>
        <a href="#">Docs</a>
        <button>Sign in</button>
    </nav>
</header>
<main class="rl-column rl-align-center rl-gap-l rl-padding-xl rl-text-center">
    <h2>Ship your next idea</h2>
    <p>The name sits on the left and the links on the right. On a narrow screen the links wrap under the name.</p>
    <div class="rl-row rl-justify-center rl-gap-m">
        <button>Get started</button>
        <button>Learn more</button>
    </div>
</main>
```

## Layouts

| Class | Arranges |
|---|---|
| `rl-column` | Elements one under another, with even spacing |
| `rl-row` | Elements side by side, wrapping onto the next line when they don't fit |
| `rl-grid` | Cells of equal width, as many per line as fit |
| `rl-frame` | Content centered in the space of its parent |

## Utilities

| Classes | Set |
|---|---|
| `rl-gap-*`, `rl-padding-*` | The space between elements, and inside the layout, on a scale from `xs` to `2xl` |
| `rl-align-*`, `rl-justify-*` | Where elements sit across the layout, and along it |
| `rl-width-*`, `rl-center-self` | A maximum width, and centering in the parent |
| `rl-width-fill`, `rl-height-fill`, `rl-height-full` | An element that takes the space the others leave |
| `rl-scroll` | The area that scrolls |
| `rl-nowrap`, `rl-nowrap-scroll`, `rl-wrap-reverse` | How a row wraps |

## Extras

| Classes | Set |
|---|---|
| `rl-border`, `rl-radius-*` | A border, and rounded corners |
| `rl-divider` | A line between elements |
| `rl-bg-*`, `rl-color-*`, `rl-gradient-*` | Backgrounds, text colors and gradients, from a palette of named roles with light and dark values |
| `rl-font-*`, `rl-text-*`, `rl-textline-*` | Font families, weights, sizes and line heights |
| `rl-shadow-*` | A scale of shadows, from `xs` to `xl` |

## Docs

[relayout.net/docs](https://relayout.net/docs/)

---

Licensed under the MIT License. See [LICENSE](LICENSE) for full terms.
