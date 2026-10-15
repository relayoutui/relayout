## Width `(rl-width-*)`

The width modifier constrains the maximum width of a container and centers it horizontally within its parent. By default, all layout containers expand to fill 100% of the available width. Width modifiers provide a way to limit content width for better readability and visual hierarchy.

Width modifiers are well suited for constraining content areas, creating centered layouts, managing line length for text readability, and establishing visual hierarchy through size variation.

### Width values

The width modifier comes in six sizes, each setting a `max-width` value and centering the container with `margin: 0 auto`:

- **`rl-width-xs`**: Maximum width of `20rem` (320px) - ideal for narrow columns, sidebars
- **`rl-width-s`**: Maximum width of `30rem` (480px) - good for forms, short content
- **`rl-width-m`**: Maximum width of `40rem` (640px) - suitable for text content, articles
- **`rl-width-l`**: Maximum width of `48rem` (768px) - comfortable for most content types
- **`rl-width-xl`**: Maximum width of `64rem` (1024px) - wide content areas, dashboards
- **`rl-width-2xl`**: Maximum width of `80rem` (1280px) - maximum width for large layouts

`rl-width-fill` isn't one of these limits: it makes an element take the remaining width in a row. See [Height, fill and scroll](#/content/mods/height).

### Width with column

Width modifiers help constrain vertical content for better readability.

```preview
<div class="rl-column rl-gap-m rl-padding-l rl-border rl-radius-m rl-width-m">
    <div>This is a column with medium width constraint</div>
    <div>Perfect for text content and articles</div>
    <div>Automatically centered horizontally</div>
</div>
```

```preview
<div class="rl-column rl-gap-m">
    <div class="rl-border rl-padding-m rl-radius-m rl-width-xs">
        <div>Extra small width</div>
        <div>Narrow column</div>
    </div>
    <div class="rl-border rl-padding-m rl-radius-m rl-width-l">
        <div>Large width</div>
        <div>Wider content area</div>
    </div>
</div>
```

### Width with row

Width modifiers constrain the wrapping behavior of rows by limiting the available space.

```preview
<div class="rl-row rl-gap-m rl-padding-l rl-border rl-radius-m rl-width-s">
    <div>Tag 1</div>
    <div>Tag 2</div>
    <div>Tag 3</div>
    <div>Tag 4</div>
    <div>Tag 5</div>
    <div>Tag 6</div>
</div>
```

```preview
<div class="rl-column rl-gap-m">
    <div class="rl-row rl-gap-s rl-padding-m rl-border rl-radius-m rl-width-xs">
        <div>Narrow</div>
        <div>Row</div>
        <div>Wraps</div>
        <div>Early</div>
    </div>
    <div class="rl-row rl-gap-s rl-padding-m rl-border rl-radius-m rl-width-xl">
        <div>Wide</div>
        <div>Row</div>
        <div>More</div>
        <div>Space</div>
        <div>To</div>
        <div>Flow</div>
    </div>
</div>
```

### Width with grid

Width modifiers constrain the overall grid container, affecting how many columns can fit.

```preview
<div class="rl-grid rl-gap-m rl-padding-l rl-border rl-radius-m rl-width-l">
    <div>Card 1</div>
    <div>Card 2</div>
    <div>Card 3</div>
    <div>Card 4</div>
    <div>Card 5</div>
    <div>Card 6</div>
</div>
```

```preview
<div class="rl-column rl-gap-m">
    <div class="rl-grid rl-gap-m rl-padding-m rl-border rl-radius-m rl-width-s">
        <div>A</div>
        <div>B</div>
        <div>C</div>
        <div>D</div>
    </div>
    <div class="rl-grid rl-gap-m rl-padding-m rl-border rl-radius-m rl-width-xl">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
    </div>
</div>
```

### Width with frame

Width modifiers can constrain frame containers while maintaining centering behavior.

```preview
<div class="rl-frame rl-padding-l rl-border rl-radius-m rl-width-m" style="height: 12em;">
    <div>Centered content in medium width frame</div>
</div>
```

```preview
<div class="rl-column rl-gap-m">
    <div class="rl-frame rl-padding-m rl-border rl-radius-m rl-width-xs" style="height: 10em;">
        <div>Small frame</div>
    </div>
    <div class="rl-frame rl-padding-m rl-border rl-radius-m rl-width-l" style="height: 10em;">
        <div>Large frame with more horizontal space</div>
    </div>
</div>
```

### Visual size comparison

All width sizes shown together for easy comparison:

```preview
<div class="rl-column rl-gap-m">
    <div class="rl-border rl-padding-m rl-radius-m rl-width-xs">
        <div>xs (20rem / 320px)</div>
    </div>
    <div class="rl-border rl-padding-m rl-radius-m rl-width-s">
        <div>s (30rem / 480px)</div>
    </div>
    <div class="rl-border rl-padding-m rl-radius-m rl-width-m">
        <div>m (40rem / 640px)</div>
    </div>
    <div class="rl-border rl-padding-m rl-radius-m rl-width-l">
        <div>l (48rem / 768px)</div>
    </div>
    <div class="rl-border rl-padding-m rl-radius-m rl-width-xl">
        <div>xl (64rem / 1024px)</div>
    </div>
    <div class="rl-border rl-padding-m rl-radius-m rl-width-2xl">
        <div>2xl (80rem / 1280px)</div>
    </div>
</div>
```

### Nested containers with varying widths

Demonstrate visual hierarchy through width variation:

```preview
<div class="rl-column rl-gap-l rl-padding-xl rl-border rl-radius-m rl-width-2xl">
    <div class="rl-column rl-gap-m rl-padding-l rl-border rl-radius-m rl-width-xl">
        <div>Extra large container (xl)</div>
        <div class="rl-column rl-gap-m rl-padding-m rl-border rl-radius-m rl-width-l">
            <div>Large container (l)</div>
            <div class="rl-padding-m rl-border rl-radius-m rl-width-m">
                Medium container (m)
            </div>
        </div>
    </div>
</div>
```

```preview
<div class="rl-column rl-gap-m">
    <div class="rl-padding-m rl-border rl-radius-m rl-width-2xl">
        Full width header (2xl)
    </div>
    <div class="rl-column rl-gap-m rl-width-l">
        <div class="rl-padding-m rl-border rl-radius-m">
            Content area (l)
        </div>
        <div class="rl-padding-m rl-border rl-radius-m rl-width-s">
            Sidebar (s)
        </div>
    </div>
</div>
```

### Complex layouts with width constraints

Width modifiers create focused, readable layouts:

```preview
<div class="rl-column rl-gap-l">
    <div class="rl-row rl-gap-m rl-padding-m rl-border rl-radius-m rl-width-2xl">
        <div>Logo</div>
        <div class="rl-row rl-gap-m rl-width-fill">
            <div>Home</div>
            <div>Products</div>
            <div>About</div>
        </div>
    </div>
    <div class="rl-column rl-gap-m rl-padding-l rl-border rl-radius-m rl-width-l">
        <div>Main Article Content</div>
        <div>Constrained to large width for readability</div>
        <div>Perfect for blog posts and documentation</div>
    </div>
    <div class="rl-grid rl-gap-m rl-width-xl">
        <div class="rl-padding-m rl-border rl-radius-m">Card 1</div>
        <div class="rl-padding-m rl-border rl-radius-m">Card 2</div>
        <div class="rl-padding-m rl-border rl-radius-m">Card 3</div>
    </div>
</div>
```

### Form layouts with width constraints

Width modifiers help create focused, scannable forms:

```preview
<div class="rl-column rl-gap-l rl-padding-l rl-border rl-radius-m rl-width-s">
    <div class="rl-column rl-gap-s">
        <div>Email Address</div>
        <div class="rl-border rl-padding-m rl-radius-s">input field</div>
    </div>
    <div class="rl-column rl-gap-s">
        <div>Password</div>
        <div class="rl-border rl-padding-m rl-radius-s">input field</div>
    </div>
    <div class="rl-row rl-justify-between rl-gap-m">
        <div class="rl-border rl-padding-m rl-radius-m">Cancel</div>
        <div class="rl-border rl-padding-m rl-radius-m">Submit</div>
    </div>
</div>
```

### Card and content layouts

Width modifiers create visual structure for cards and content blocks:

```preview
<div class="rl-column rl-gap-m">
    <div class="rl-column rl-gap-m rl-padding-l rl-border rl-radius-m rl-width-m">
        <div style="font-weight: bold;">Featured Article</div>
        <div>This card uses medium width for article previews</div>
        <div class="rl-row rl-gap-s">
            <div class="rl-border rl-padding-s rl-radius-s">Read More</div>
            <div class="rl-border rl-padding-s rl-radius-s">Share</div>
        </div>
    </div>
    <div class="rl-grid rl-gap-m rl-width-xl">
        <div class="rl-column rl-gap-s rl-padding-m rl-border rl-radius-m">
            <div>Card 1</div>
            <div>Preview text</div>
        </div>
        <div class="rl-column rl-gap-s rl-padding-m rl-border rl-radius-m">
            <div>Card 2</div>
            <div>Preview text</div>
        </div>
        <div class="rl-column rl-gap-s rl-padding-m rl-border rl-radius-m">
            <div>Card 3</div>
            <div>Preview text</div>
        </div>
    </div>
</div>
```

### Dashboard and panel layouts

Width modifiers organize complex dashboard layouts:

```preview
<div class="rl-column rl-gap-m">
    <div class="rl-row rl-gap-m rl-padding-m rl-border rl-radius-m rl-width-2xl">
        <div>Dashboard</div>
        <div class="rl-row rl-gap-m rl-width-fill">
            <div>Settings</div>
            <div>Profile</div>
            <div>Logout</div>
        </div>
    </div>
    <div class="rl-column rl-gap-m rl-width-xl">
        <div class="rl-row rl-gap-m">
            <div class="rl-column rl-gap-s rl-padding-m rl-border rl-radius-m rl-width-fill">
                <div>Total Users</div>
                <div>1,234</div>
            </div>
            <div class="rl-column rl-gap-s rl-padding-m rl-border rl-radius-m rl-width-fill">
                <div>Revenue</div>
                <div>$56,789</div>
            </div>
        </div>
        <div class="rl-column rl-gap-s rl-padding-l rl-border rl-radius-m">
            <div>Recent Activity</div>
            <div class="rl-divider"></div>
            <div>Activity item 1</div>
            <div class="rl-divider"></div>
            <div>Activity item 2</div>
        </div>
    </div>
</div>
```

### Usage notes

The width modifier applies `max-width` and horizontal centering to containers:

- **CSS properties**: Sets `max-width` to the specified value and `margin: 0 auto` for centering
- **Centering behavior**: Containers are automatically centered horizontally within their parent
- **Responsive behavior**: On screens narrower than the `max-width`, containers shrink to fit
- **Default behavior**: Without width modifiers, containers expand to fill 100% of available width
- **CSS variables**: Width values are defined as `--rl-width-xs` through `--rl-width-2xl`
- **Size selection**: Choose based on content type:
  - **xs/s**: Forms, sidebars, narrow columns
  - **m/l**: Articles, blog posts, primary content
  - **xl/2xl**: Dashboards, wide layouts, full-width sections
- **Nesting strategy**: Use progressively smaller widths for nested containers to create visual hierarchy
- **Text readability**: For optimal line length in text content, use `m` (640px) or `l` (768px)
- **Combining modifiers**: Width works with all other modifiers (padding, border, radius, gap, etc.)
- **Grid interaction**: With grids, width affects the total container size, changing how many columns fit

Width modifiers are essential for creating focused, readable layouts and establishing visual hierarchy. They're particularly valuable for content-heavy sites where constraining line length improves readability, and for creating centered layouts without manual margin calculations.

### Customizing width values

Override the CSS variables to customize width values globally:

```css
:root {
  --rl-width-xs: 18rem;   /* ~288px */
  --rl-width-s: 28rem;    /* ~448px */
  --rl-width-m: 42rem;    /* ~672px */
  --rl-width-l: 52rem;    /* ~832px */
  --rl-width-xl: 68rem;   /* ~1088px */
  --rl-width-2xl: 84rem;  /* ~1344px */
}
```
