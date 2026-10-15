## Height, fill and scroll `(rl-height-full, rl-height-fill, rl-width-fill, rl-scroll)`

By default, a layout container takes only the height its content needs, and the elements of a row take only the width they need. These modifiers make an element fill the space around it, and choose which area scrolls.

- **`rl-height-full`** makes the element as tall as its parent (`height: 100%`). The parent needs a height.
- **`rl-height-fill`** and **`rl-width-fill`** go on an element inside a column or a row, and make it take the space the other elements leave. What each one does depends on the parent's direction.
- **`rl-scroll`** makes the element scroll when its content doesn't fit (`overflow: auto`).

None of the height and fill classes scrolls on its own. Add `rl-scroll` to the area that should scroll, and only to that one: a scrolling area clips dropdowns, tooltips and shadows, and `position: sticky` doesn't work inside it.

### Fill classes, by parent

The fill classes are named after what you see: `rl-width-fill` fills the width, `rl-height-fill` fills the height. Each one grows along the parent's direction and stretches across it, so it goes on the element, not on the parent.

| Class | In a column | In a row |
|---|---|---|
| `rl-height-fill` | Grows to take the remaining height | Stretches to the row's height |
| `rl-width-fill` | Stretches across the column's width | Grows to take the remaining width |

Any element can fill, not only the first or the last. An element can have both classes. Outside a column or a row, such as in a grid, the fill classes have no effect.

### Filling a column

#### `rl-height-fill`

The fill element takes the height the other elements leave. Here the column has a `min-height`, so the footer sits at the bottom, and when the content is longer, the column grows and the page scrolls.

```preview|debug
<div class="rl-column rl-gap-m" style="min-height: 15em;">
    <div class="rl-border rl-padding-m">Header</div>
    <div class="rl-height-fill rl-border rl-padding-m">Main content takes the remaining height</div>
    <div class="rl-border rl-padding-m">Footer</div>
</div>
```

#### `rl-height-fill rl-scroll`

When the column has a set `height`, the fill element can get shorter than its content. Add `rl-scroll` to scroll what doesn't fit, while the other elements stay in place.

```preview|debug
<div class="rl-column rl-gap-m" style="height: 15em;">
    <div class="rl-border rl-padding-m">Fixed header</div>
    <div class="rl-column rl-gap-m rl-height-fill rl-scroll rl-border rl-padding-m">
        <div>Content item 1</div>
        <div>Content item 2</div>
        <div>Content item 3</div>
        <div>Content item 4</div>
        <div>Content item 5</div>
        <div>Content item 6</div>
        <div>Content item 7</div>
        <div>Content item 8</div>
        <div>This area scrolls when content overflows</div>
    </div>
    <div class="rl-border rl-padding-m">Fixed footer</div>
</div>
```

Two fill elements share the remaining height. Each gets the height of its content plus an equal share of the space left, so they are the same height only when their content is. When the content doesn't fit, they shrink in proportion to it.

```preview|debug
<div class="rl-column rl-gap-m" style="height: 20em; border: 1px solid #ccc;">
    <div class="rl-border rl-padding-m">Fixed header</div>
    <div class="rl-column rl-height-fill rl-border rl-padding-m">
        <div>First fill area</div>
        <div>Takes half the remaining space</div>
    </div>
    <div class="rl-column rl-height-fill rl-border rl-padding-m">
        <div>Second fill area</div>
        <div>Takes the other half</div>
    </div>
    <div class="rl-border rl-padding-m">Fixed footer</div>
</div>
```

The other elements of a column keep their height: they don't shrink to make room. Only a fill element grows or shrinks.

#### `rl-width-fill`

The fill element stretches across the column, even when the column aligns its elements with `rl-align-*`.

```preview|debug
<div class="rl-column rl-align-start rl-gap-m">
    <div class="rl-border rl-padding-m">Takes the width it needs</div>
    <div class="rl-width-fill rl-border rl-padding-m">Stretches across the column</div>
</div>
```

### Filling a row

#### `rl-width-fill`

The fill element takes the width the other elements leave. In a row that wraps, it drops below the others when it no longer fits next to them, at its longest word. Resize the preview to see it wrap.

```preview|debug
<div class="rl-row rl-align-start rl-gap-m">
    <div class="rl-border rl-padding-m" style="width: 10em;">Sidebar</div>
    <div class="rl-width-fill rl-border rl-padding-m">Main content takes the remaining width, and moves below the sidebar when the row gets too narrow.</div>
</div>
```

In a row with `rl-nowrap`, the fill element never wraps, and can get narrower than its content instead.

#### `rl-height-fill`

The fill element stretches to the row's height, even when the row aligns its elements with `rl-align-*`.

```preview|debug
<div class="rl-row rl-gap-m" style="height: 8em;">
    <div class="rl-border rl-padding-m">Centered</div>
    <div class="rl-height-fill rl-border rl-padding-m">Stretches to the row's height</div>
</div>
```

### Full height

#### `rl-height-full`

The element is as tall as its parent, which needs a set height. It doesn't scroll on its own: add `rl-scroll` when its content can be taller.

```preview|debug
<div style="height: 10em; border: 1px solid #ccc;">
    <div class="rl-column rl-height-full rl-border rl-padding-m">
        <div>Fills 100% of its parent's height</div>
        <div>The parent must have a height</div>
    </div>
</div>
```

Inside a column, an element with `rl-height-full` keeps that height and doesn't shrink next to the other elements. To take the height that's left, use `rl-height-fill`.

#### `rl-scroll`

```preview|debug
<div style="height: 10em; border: 1px solid #ccc;">
    <div class="rl-column rl-gap-s rl-height-full rl-scroll rl-padding-m">
        <div>Content item 1</div>
        <div>Content item 2</div>
        <div>Content item 3</div>
        <div>Content item 4</div>
        <div>Content item 5</div>
        <div>Content item 6</div>
        <div>This area scrolls</div>
    </div>
</div>
```

### Full-height layouts

#### Page with the footer at the bottom

The column has a `min-height`, so it grows with its content and the page scrolls. To keep the header in view while the page scrolls, make it `position: sticky`.

```preview|debug
<div class="rl-column" style="min-height: 20em; border: 1px solid #ccc;">
    <div class="rl-row rl-justify-between rl-gap-m rl-border rl-padding-m">
        <div>Logo</div>
        <div class="rl-row rl-gap-m">
            <div>Home</div>
            <div>About</div>
            <div>Contact</div>
        </div>
    </div>
    <div class="rl-column rl-height-fill rl-padding-l rl-gap-m">
        <div>Main Content Area</div>
        <div>This area fills the vertical space the header and footer leave</div>
    </div>
    <div class="rl-border rl-padding-m">
        <div>Footer content</div>
    </div>
</div>
```

#### App shell

The column has a set `height`, so the header stays in place, and the sidebar and the main area each scroll on their own.

```preview|debug
<div class="rl-column" style="height: 16em; border: 1px solid #ccc;">
    <div class="rl-row rl-justify-between rl-gap-m rl-border rl-padding-m">
        <div style="font-weight: bold;">Application</div>
        <div class="rl-row rl-gap-m">
            <div>Search</div>
            <div>Profile</div>
        </div>
    </div>
    <div class="rl-row rl-nowrap rl-height-fill">
        <div class="rl-column rl-gap-s rl-height-fill rl-scroll rl-border rl-padding-m" style="width: 12em;">
            <div>Dashboard</div>
            <div>Projects</div>
            <div>Team</div>
            <div>Analytics</div>
            <div>Reports</div>
            <div>Settings</div>
            <div>Help</div>
            <div>Many more items...</div>
            <div>The sidebar scrolls</div>
        </div>
        <div class="rl-column rl-gap-m rl-width-fill rl-height-fill rl-scroll rl-padding-l">
            <div style="font-size: 1.2em; font-weight: bold;">Page Title</div>
            <div>The main area takes the remaining width and the full height of the row.</div>
            <div>It scrolls when its content is taller.</div>
            <div class="rl-grid rl-gap-m">
                <div class="rl-border rl-padding-m rl-radius-m" style="height: 6em;">Card 1</div>
                <div class="rl-border rl-padding-m rl-radius-m" style="height: 6em;">Card 2</div>
                <div class="rl-border rl-padding-m rl-radius-m" style="height: 6em;">Card 3</div>
            </div>
        </div>
    </div>
</div>
```

The row needs `rl-nowrap`. A row that wraps grows to fit its tallest element, so the areas inside it would never scroll.

#### Dashboard

Fill elements nest: each panel column takes half the width, and inside it, the lower panel takes the remaining height and scrolls.

```preview|debug
<div class="rl-column" style="height: 20em; border: 1px solid #ccc;">
    <div class="rl-row rl-justify-between rl-gap-m rl-border rl-padding-m">
        <div>Dashboard</div>
        <div class="rl-row rl-gap-m">
            <div>Profile</div>
            <div>Settings</div>
        </div>
    </div>
    <div class="rl-row rl-nowrap rl-height-fill rl-gap-m rl-padding-m">
        <div class="rl-column rl-gap-m rl-width-fill rl-height-fill">
            <div class="rl-column rl-gap-s rl-border rl-radius-m rl-padding-m">
                <div>Recent Activity</div>
                <div class="rl-divider"></div>
                <div>Activity 1</div>
                <div>Activity 2</div>
            </div>
            <div class="rl-column rl-gap-s rl-height-fill rl-scroll rl-border rl-radius-m rl-padding-m">
                <div>Main Content</div>
                <div class="rl-divider"></div>
                <div>Content grows to fill space</div>
                <div>Scrollable if needed</div>
            </div>
        </div>
        <div class="rl-column rl-gap-m rl-width-fill rl-height-fill">
            <div class="rl-column rl-gap-s rl-border rl-radius-m rl-padding-m">
                <div>Stats</div>
                <div class="rl-divider"></div>
                <div>Users: 1,234</div>
                <div>Revenue: $56,789</div>
            </div>
            <div class="rl-column rl-gap-s rl-height-fill rl-scroll rl-border rl-radius-m rl-padding-m">
                <div>Notifications</div>
                <div class="rl-divider"></div>
                <div>Notification 1</div>
                <div>Notification 2</div>
                <div>Notification 3</div>
                <div>Notification 4</div>
                <div>Many more...</div>
                <div>Scrolls independently</div>
            </div>
        </div>
    </div>
</div>
```

#### Dialog

```preview
<div class="rl-frame" style="height: 25em; background: rgba(0,0,0,0.1);">
    <div class="rl-column rl-border rl-radius-m" style="width: 25em; height: 18em; background: white;">
        <div class="rl-row rl-justify-between rl-gap-m rl-padding-m">
            <div style="font-weight: bold;">Dialog Title</div>
            <div>✕</div>
        </div>
        <div class="rl-divider"></div>
        <div class="rl-column rl-height-fill rl-scroll rl-padding-l rl-gap-m">
            <div>Dialog content area</div>
            <div>Fills the space between header and footer</div>
            <div>Scrolls if content is too long</div>
            <div>More content...</div>
            <div>Even more content...</div>
            <div>And the last line</div>
        </div>
        <div class="rl-divider"></div>
        <div class="rl-row rl-justify-end rl-gap-m rl-padding-m">
            <div class="rl-border rl-padding-s rl-radius-s">Cancel</div>
            <div class="rl-border rl-padding-s rl-radius-s">Save</div>
        </div>
    </div>
</div>
```

### Comparison: height-full vs height-fill

```preview|debug
<div class="rl-row rl-align-start rl-gap-m">
    <div class="rl-column rl-gap-s rl-width-fill">
        <div>Using height-full (requires parent height):</div>
        <div style="height: 15em; border: 1px solid #ccc;">
            <div class="rl-column rl-height-full rl-border rl-padding-m">
                <div>Fills 100% of parent</div>
                <div>Parent must have height</div>
            </div>
        </div>
    </div>
    <div class="rl-column rl-gap-s rl-width-fill">
        <div>Using height-fill (in a column):</div>
        <div class="rl-column" style="height: 15em; border: 1px solid #ccc;">
            <div class="rl-border rl-padding-m">Fixed item</div>
            <div class="rl-column rl-height-fill rl-border rl-padding-m">
                <div>Grows to fill remaining</div>
                <div>Takes what the column leaves</div>
            </div>
        </div>
    </div>
</div>
```

### Usage notes

- **`rl-height-full`**:
  - Sets `height: 100%`; the parent needs a set height
  - Doesn't scroll on its own; add `rl-scroll`
  - Inside a column, keeps its height instead of shrinking next to other elements

- **`rl-height-fill`**:
  - In a column: grows to take the remaining height, and can shrink below its content (`flex: 999 1 auto; min-height: 0`)
  - In a row: stretches to the row's height (`align-self: stretch`)

- **`rl-width-fill`**:
  - In a row: grows to take the remaining width (`flex: 999 1 0`), and wraps to its own line at its longest word; with `rl-nowrap`, it can get narrower than its content instead
  - In a column: stretches across the column's width (`align-self: stretch`)

- **`rl-scroll`**:
  - Sets `overflow: auto`, so the element scrolls when its content doesn't fit
  - Put it on the innermost area that should scroll

- **Common patterns**:
  - Header + content + footer: `rl-height-fill` on the content; the page scrolls when the column has a `min-height`
  - Fixed header with a scrolling content area: a column with a set `height`, and `rl-height-fill rl-scroll` on the content
  - Sidebar next to content: `rl-width-fill` on the content
  - App shell: an `rl-row rl-nowrap rl-height-fill` inside the column, with `rl-height-fill rl-scroll` on each area that scrolls

The [recipes](#/content/start/recipes) put these together.
