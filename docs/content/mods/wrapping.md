## Wrapping `(rl-nowrap, rl-nowrap-scroll, rl-wrap-reverse)`

The wrapping modifier controls how elements behave when they don't fit in the available space. By default, a row wraps its elements to the next line when they overflow. Wrapping modifiers allow you to prevent wrapping, add horizontal scrolling, or reverse the wrap direction.

Wrapping modifiers are well suited for horizontal menus, tag lists, toolbars, and any layout where you need precise control over overflow and wrapping behavior.

### Wrapping values

The wrapping modifier comes in three variants:

- **`rl-nowrap`**: Prevents wrapping with `flex-wrap: nowrap`, causing elements to overflow the container
- **`rl-nowrap-scroll`**: Prevents wrapping and adds horizontal scrolling with `overflow-x: auto`, allowing users to scroll through overflowing content
- **`rl-wrap-reverse`**: Reverses wrap direction with `flex-wrap: wrap-reverse`, making new lines appear above instead of below

### Default wrapping behavior

Understanding the default wrapping behavior helps clarify when to use wrapping modifiers.

```preview|debug
<div class="rl-row rl-gap-m">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
</div>
```

By default, a row wraps to new lines when its elements don't fit.

### Wrapping with column

Column layouts don't wrap because they arrange elements vertically. Wrapping modifiers have no effect on columns.

```preview|debug
<div class="rl-column rl-gap-m rl-nowrap">
    <div>Column item 1</div>
    <div>Column item 2</div>
    <div>Column item 3</div>
</div>
```

Columns always display elements vertically regardless of wrapping modifiers.

### Wrapping with row

Rows naturally wrap by default. Wrapping modifiers control this behavior.

#### Default wrapping (wrap)

```preview|debug
<div class="rl-row rl-gap-m">
    <div>React</div>
    <div>Vue</div>
    <div>Angular</div>
    <div>Svelte</div>
    <div>Solid</div>
    <div>Lit</div>
    <div>TypeScript</div>
    <div>JavaScript</div>
</div>
```

#### `rl-nowrap`

Prevents wrapping, causing overflow:

```preview|debug
<div class="rl-row rl-gap-m rl-nowrap">
    <div>React</div>
    <div>Vue</div>
    <div>Angular</div>
    <div>Svelte</div>
    <div>Solid</div>
    <div>Lit</div>
    <div>TypeScript</div>
    <div>JavaScript</div>
</div>
```

#### `rl-nowrap-scroll`

Prevents wrapping and adds horizontal scrolling:

```preview|debug
<div class="rl-row rl-gap-m rl-nowrap-scroll">
    <div>React</div>
    <div>Vue</div>
    <div>Angular</div>
    <div>Svelte</div>
    <div>Solid</div>
    <div>Lit</div>
    <div>TypeScript</div>
    <div>JavaScript</div>
    <div>Python</div>
    <div>Ruby</div>
</div>
```

Scroll horizontally to see all items →

#### `rl-wrap-reverse`

Wraps in reverse order (bottom to top):

```preview|debug
<div class="rl-row rl-gap-m rl-wrap-reverse">
    <div>Tag 1</div>
    <div>Tag 2</div>
    <div>Tag 3</div>
    <div>Tag 4</div>
    <div>Tag 5</div>
    <div>Tag 6</div>
    <div>Tag 7</div>
    <div>Tag 8</div>
</div>
```

New lines appear above instead of below.

### Wrapping with grid

Grid layouts don't use flex-wrap, so wrapping modifiers have no effect. Grids use their own column/row system.

```preview|debug
<div class="rl-grid rl-gap-m rl-nowrap">
    <div>Card 1</div>
    <div>Card 2</div>
    <div>Card 3</div>
    <div>Card 4</div>
</div>
```

Grids always create new rows based on column configuration.

### Wrapping with frame

Frames don't wrap content, so wrapping modifiers have no effect.

```preview|debug
<div class="rl-frame rl-nowrap" style="height: 10em; border: 1px solid #ccc;">
    <div>Centered content</div>
</div>
```

Frames center content regardless of wrapping modifiers.

### Horizontal navigation menus

Wrapping modifiers create different navigation patterns.

#### Wrapping navigation (default)

```preview
<div class="rl-row rl-gap-m rl-padding-m rl-border rl-radius-m">
    <div>Home</div>
    <div>Products</div>
    <div>Services</div>
    <div>About Us</div>
    <div>Contact</div>
    <div>Blog</div>
    <div>Support</div>
</div>
```

#### Scrollable navigation

```preview
<div class="rl-row rl-gap-m rl-padding-m rl-border rl-radius-m rl-nowrap-scroll">
    <div>Home</div>
    <div>Products</div>
    <div>Services</div>
    <div>About Us</div>
    <div>Contact</div>
    <div>Blog</div>
    <div>Support</div>
    <div>Documentation</div>
    <div>Community</div>
</div>
```

### Tag and chip lists

Different wrapping behaviors for tag collections.

#### Wrapping tags (recommended)

```preview
<div class="rl-row rl-gap-s rl-padding-m rl-border rl-radius-m">
    <div class="rl-border rl-padding-s rl-radius-s">JavaScript</div>
    <div class="rl-border rl-padding-s rl-radius-s">TypeScript</div>
    <div class="rl-border rl-padding-s rl-radius-s">React</div>
    <div class="rl-border rl-padding-s rl-radius-s">Vue</div>
    <div class="rl-border rl-padding-s rl-radius-s">Angular</div>
    <div class="rl-border rl-padding-s rl-radius-s">Svelte</div>
    <div class="rl-border rl-padding-s rl-radius-s">Node.js</div>
</div>
```

#### Scrollable tags

```preview
<div class="rl-row rl-gap-s rl-padding-m rl-border rl-radius-m rl-nowrap-scroll">
    <div class="rl-border rl-padding-s rl-radius-s">JavaScript</div>
    <div class="rl-border rl-padding-s rl-radius-s">TypeScript</div>
    <div class="rl-border rl-padding-s rl-radius-s">React</div>
    <div class="rl-border rl-padding-s rl-radius-s">Vue</div>
    <div class="rl-border rl-padding-s rl-radius-s">Angular</div>
    <div class="rl-border rl-padding-s rl-radius-s">Svelte</div>
    <div class="rl-border rl-padding-s rl-radius-s">Node.js</div>
    <div class="rl-border rl-padding-s rl-radius-s">Deno</div>
</div>
```

### Toolbar layouts

Toolbars benefit from nowrap-scroll for many actions.

```preview
<div class="rl-row rl-gap-m rl-padding-m rl-border">
    <div style="font-weight: bold;">Document.txt</div>
    <div class="rl-row rl-gap-s rl-nowrap-scroll rl-width-fill">
        <div class="rl-border rl-padding-s rl-radius-s">Save</div>
        <div class="rl-border rl-padding-s rl-radius-s">Undo</div>
        <div class="rl-border rl-padding-s rl-radius-s">Redo</div>
        <div class="rl-border rl-padding-s rl-radius-s">Cut</div>
        <div class="rl-border rl-padding-s rl-radius-s">Copy</div>
        <div class="rl-border rl-padding-s rl-radius-s">Paste</div>
        <div class="rl-border rl-padding-s rl-radius-s">Format</div>
    </div>
</div>
```

### Tab navigation

Scrollable tabs for interfaces with many tabs.

```preview
<div class="rl-column rl-border rl-radius-m">
    <div class="rl-row rl-gap-0 rl-nowrap-scroll rl-padding-s">
        <div class="rl-padding-m" style="border-bottom: 2px solid currentColor;">Tab 1</div>
        <div class="rl-padding-m">Tab 2</div>
        <div class="rl-padding-m">Tab 3</div>
        <div class="rl-padding-m">Tab 4</div>
        <div class="rl-padding-m">Tab 5</div>
        <div class="rl-padding-m">Tab 6</div>
        <div class="rl-padding-m">Tab 7</div>
    </div>
    <div class="rl-divider"></div>
    <div class="rl-padding-l">Tab content area</div>
</div>
```

### Button groups

Different wrapping strategies for action buttons.

#### Wrapping buttons

```preview
<div class="rl-row rl-gap-s rl-padding-m rl-border rl-radius-m">
    <div class="rl-border rl-padding-m rl-radius-s">New</div>
    <div class="rl-border rl-padding-m rl-radius-s">Open</div>
    <div class="rl-border rl-padding-m rl-radius-s">Save</div>
    <div class="rl-border rl-padding-m rl-radius-s">Export</div>
    <div class="rl-border rl-padding-m rl-radius-s">Share</div>
</div>
```

#### Non-wrapping buttons

```preview
<div class="rl-row rl-gap-s rl-padding-m rl-border rl-radius-m rl-nowrap">
    <div class="rl-border rl-padding-m rl-radius-s">New</div>
    <div class="rl-border rl-padding-m rl-radius-s">Open</div>
    <div class="rl-border rl-padding-m rl-radius-s">Save</div>
</div>
```

### Comparison: wrap vs nowrap vs nowrap-scroll

Visual comparison of all three behaviors:

```preview
<div class="rl-column rl-gap-m">
    <div class="rl-column rl-gap-s">
        <div>Default (wrap):</div>
        <div class="rl-row rl-gap-s rl-border rl-padding-m rl-radius-s">
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <div>Item 6</div>
        </div>
    </div>
    <div class="rl-column rl-gap-s">
        <div>nowrap (overflow):</div>
        <div class="rl-row rl-gap-s rl-border rl-padding-m rl-radius-s rl-nowrap">
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <div>Item 6</div>
        </div>
    </div>
    <div class="rl-column rl-gap-s">
        <div>nowrap-scroll (scrollable):</div>
        <div class="rl-row rl-gap-s rl-border rl-padding-m rl-radius-s rl-nowrap-scroll">
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <div>Item 6</div>
        </div>
    </div>
</div>
```

### Combining with other modifiers

Wrapping modifiers work well with gap, padding, align, and justify.

```preview
<div class="rl-column rl-gap-m">
    <div class="rl-row rl-gap-m rl-padding-l rl-border rl-radius-m rl-justify-center rl-nowrap-scroll">
        <div>Action 1</div>
        <div>Action 2</div>
        <div>Action 3</div>
        <div>Action 4</div>
        <div>Action 5</div>
    </div>
    <div class="rl-row rl-gap-l rl-padding-m rl-border rl-radius-m rl-nowrap">
        <div>Label</div>
        <div class="rl-width-fill">Content area</div>
    </div>
</div>
```

### Responsive navigation pattern

Combining wrapping with width constraints:

```preview
<div class="rl-row rl-gap-m rl-padding-m rl-border rl-radius-m rl-width-l">
    <div class="rl-row rl-gap-s">
        <div class="rl-frame" style="height: 2em; width: 2em; background: #e0e0e0; border-radius: 0.25rem;"></div>
        <div style="font-weight: bold;">Brand</div>
    </div>
    <div class="rl-row rl-gap-m rl-nowrap-scroll rl-width-fill">
        <div>Products</div>
        <div>Solutions</div>
        <div>Resources</div>
        <div>Documentation</div>
        <div>Community</div>
        <div>Support</div>
    </div>
</div>
```

### Card carousels

Horizontal scrolling card layouts:

```preview
<div class="rl-column rl-gap-m rl-border rl-radius-m rl-padding-m">
    <div style="font-weight: bold;">Featured Items</div>
    <div class="rl-row rl-gap-m rl-nowrap-scroll">
        <div class="rl-column rl-gap-s rl-border rl-radius-m rl-padding-m">
            <div>Card 1</div>
            <div>Featured content</div>
        </div>
        <div class="rl-column rl-gap-s rl-border rl-radius-m rl-padding-m">
            <div>Card 2</div>
            <div>Featured content</div>
        </div>
        <div class="rl-column rl-gap-s rl-border rl-radius-m rl-padding-m">
            <div>Card 3</div>
            <div>Featured content</div>
        </div>
        <div class="rl-column rl-gap-s rl-border rl-radius-m rl-padding-m">
            <div>Card 4</div>
            <div>Featured content</div>
        </div>
    </div>
</div>
```

### Usage notes

The wrapping modifiers control flex-wrap behavior for horizontal layouts:

- **Applicable layouts**: Only affects row
- **No effect on**: Column (vertical), grid (CSS grid), frame (centering)

- **`rl-nowrap`**:
  - Sets `flex-wrap: nowrap`
  - Elements stay on one line and may overflow
  - An `rl-width-fill` element can get narrower than its content instead of overflowing
  - Use when: You want to prevent wrapping and don't mind overflow
  - Best for: Compact toolbars, single-line menus

- **`rl-nowrap-scroll`**:
  - Sets `flex-wrap: nowrap` with `overflow-x: auto`
  - Enables horizontal scrolling for overflowing content
  - Child elements get `flex-shrink: 0` to prevent compression
  - Use when: You have many items and want horizontal scrolling
  - Best for: Tab navigation, tag lists, card carousels, long toolbars
  - Provides smooth scrolling on touch devices

- **`rl-wrap-reverse`**:
  - Sets `flex-wrap: wrap-reverse`
  - New lines appear above instead of below
  - Use when: You want reversed visual order
  - Best for: Special UI patterns, bottom-anchored wrapping

- **Default behavior**:
  - Row uses `flex-wrap: wrap` by default
  - Elements naturally wrap to new lines when they don't fit
  - This is the most common and intuitive behavior

- **Performance considerations**:
  - `nowrap-scroll` is efficient for many items (no reflow on wrap)
  - Scrollable containers work well on mobile with touch scrolling
  - Consider viewport width when designing nowrap layouts

- **Accessibility**:
  - Ensure scrollable content is keyboard accessible
  - Provide visual cues (shadows/gradients) for scrollable areas
  - Consider adding scroll indicators for better UX

- **Mobile considerations**:
  - `nowrap-scroll` works excellently on mobile with swipe gestures
  - Default wrapping may be preferable on narrow screens
  - Test touch scrolling on actual devices

### When to use each modifier

Choose the right wrapping strategy based on your use case:

**Use default wrapping when:**
- Content naturally fits in available space
- Wrapping to multiple lines is acceptable
- Mobile-friendly responsive behavior is needed
- Tag/chip lists with varying content

**Use `rl-nowrap` when:**
- Items must stay on one line
- Overflow is acceptable or desired
- Working with fixed-width containers
- Compact, single-line layouts

**Use `rl-nowrap-scroll` when:**
- Many items need to be accessible
- Horizontal scrolling is preferred over wrapping
- Creating carousel-like interfaces
- Tab navigation with many tabs
- Mobile-friendly swipeable content

**Use `rl-wrap-reverse` when:**
- Creating specialized UI patterns
- Items should column upward instead of downward
- Working with bottom-anchored layouts
