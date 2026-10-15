## Recipes

Relayout has four layouts, [column](#/content/layouts/column), [row](#/content/layouts/row), [grid](#/content/layouts/grid) and [frame](#/content/layouts/frame), plus [divider](#/content/layouts/divider). Common patterns come from combining them with modifiers. Each recipe below is a starting point to copy and adjust.

The page recipes use a fixed height in the previews, so they fit on this page. On a real page, use `100vh` instead.

### Header: two groups pushed apart

`rl-justify-between` puts the logo at the start and the navigation at the end. When the header gets too narrow, the navigation wraps below the logo.

```preview|debug
<header class="rl-row rl-justify-between rl-gap-m">
    <a>Logo</a>
    <nav class="rl-row rl-gap-m">
        <a>Home</a>
        <a>Docs</a>
        <a>About</a>
    </nav>
</header>
```

### Sidebar that moves below the content on narrow screens

The content takes the width the sidebar leaves, and drops below the sidebar when it no longer fits next to it. The page scrolls as a whole; nothing scrolls inside. Resize the preview to see it wrap. For a sidebar on the right, put the sidebar last.

```preview|debug
<div class="rl-row rl-align-start rl-gap-m">
    <aside style="width: 12em;">Sidebar</aside>
    <main class="rl-width-fill">The main content takes the remaining width, and moves below the sidebar when the row gets too narrow.</main>
</div>
```

### A field and a button

The field takes the width the button leaves. `rl-nowrap` keeps them on one line, so the field gets narrower instead of wrapping.

```preview|debug
<div class="rl-row rl-nowrap rl-gap-m">
    <input class="rl-width-fill" placeholder="Search" />
    <button>Search</button>
</div>
```

### Page: footer at the bottom, the page scrolls

The column is at least as tall as the window, and the main area takes the height the header and footer leave. With more content, the column grows and the page scrolls.

```html
<div class="rl-column" style="min-height: 100vh;">
    <header>…</header>
    <main class="rl-height-fill">…</main>
    <footer>…</footer>
</div>
```

```preview|debug
<div class="rl-column" style="min-height: 15em;">
    <header class="rl-padding-m">Header</header>
    <main class="rl-height-fill rl-padding-m">Main</main>
    <footer class="rl-padding-m">Footer</footer>
</div>
```

To keep the header in view while the page scrolls, make it `position: sticky; top: 0`.

### App shell: header and sidebar stay, the sidebar and main area scroll

The column is exactly as tall as the window. The row below the header takes the remaining height, and the sidebar and the main area each scroll on their own. The row needs `rl-nowrap`: a row that wraps grows to fit its tallest element, so nothing inside it would scroll.

```html
<div class="rl-column" style="height: 100vh;">
    <header>…</header>
    <div class="rl-row rl-nowrap rl-height-fill">
        <nav class="rl-height-fill rl-scroll" style="width: 12em;">…</nav>
        <main class="rl-width-fill rl-height-fill rl-scroll">…</main>
    </div>
</div>
```

```preview|debug
<div class="rl-column" style="height: 13em;">
    <header class="rl-padding-m">Header</header>
    <div class="rl-row rl-nowrap rl-height-fill">
        <nav class="rl-column rl-gap-s rl-height-fill rl-scroll rl-padding-m" style="width: 12em;">
            <div>Dashboard</div>
            <div>Projects</div>
            <div>Team</div>
            <div>Analytics</div>
            <div>Reports</div>
            <div>Settings</div>
            <div>Help</div>
        </nav>
        <main class="rl-column rl-gap-m rl-width-fill rl-height-fill rl-scroll rl-padding-m">
            <div>The main area scrolls on its own.</div>
            <div style="height: 20em;">Tall content</div>
            <div>The end of the content</div>
        </main>
    </div>
</div>
```

### Equal columns that stack on narrow screens

A grid gives its cells the same width, and moves them to new lines when they no longer fit side by side. The `rl-grid-fit-*` classes set how narrow a cell can get.

```preview|debug
<div class="rl-grid rl-gap-m">
    <div>First</div>
    <div>Second</div>
    <div>Third</div>
</div>
```

### Equal columns that never stack

Fill elements in a row that doesn't wrap share the width equally, however narrow the row gets.

```preview|debug
<div class="rl-row rl-nowrap rl-gap-m">
    <div class="rl-width-fill">First</div>
    <div class="rl-width-fill">Second</div>
    <div class="rl-width-fill">Third</div>
</div>
```
