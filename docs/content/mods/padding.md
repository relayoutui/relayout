## Padding `(rl-padding-*)`

The padding modifier adds internal spacing around a container, creating space between the container's edges and its content. Padding is applied uniformly on all four sides (top, right, bottom, left) and works consistently across all layout types.

Apply class `rl-padding-*` to a layout container, where `*` can be `0`, `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

### Padding sizes

- **`rl-padding-0`** - No padding (0)
- **`rl-padding-xs`** - Extra small padding (0.125rem / 2px)
- **`rl-padding-s`** - Small padding (0.25rem / 4px)
- **`rl-padding-m`** - Medium padding (0.5rem / 8px)
- **`rl-padding-l`** - Large padding (1rem / 16px)
- **`rl-padding-xl`** - Extra large padding (1.5rem / 24px)
- **`rl-padding-2xl`** - Double extra large padding (2.25rem / 36px)

### Padding with column

Padding creates internal spacing around the column container, pushing content away from all edges.

#### `rl-padding-0`

```preview|debug
<div class="rl-column rl-padding-0 rl-border">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

#### `rl-padding-s`

```preview|debug
<div class="rl-column rl-padding-s rl-border">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

#### `rl-padding-m`

```preview|debug
<div class="rl-column rl-padding-m rl-border">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

#### `rl-padding-l`

```preview|debug
<div class="rl-column rl-padding-l rl-border">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

#### `rl-padding-xl`

```preview|debug
<div class="rl-column rl-padding-xl rl-border">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

#### `rl-padding-2xl`

```preview|debug
<div class="rl-column rl-padding-2xl rl-border">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

### Padding with row

In row layouts, padding creates breathing room around the wrapped items, preventing them from touching the container edges.

#### `rl-padding-m`

```preview|debug
<div class="rl-row rl-gap-s rl-padding-m rl-border" style="width: 20em;">
    <div>Tag 1</div>
    <div>Tag 2</div>
    <div>Tag 3</div>
    <div>Tag 4</div>
    <div>Tag 5</div>
    <div>Tag 6</div>
</div>
```

#### `rl-padding-l`

```preview|debug
<div class="rl-row rl-gap-m rl-padding-l rl-border">
    <div>Badge A</div>
    <div>Badge B</div>
    <div>Badge C</div>
    <div>Badge D</div>
</div>
```

#### `rl-padding-xl`

```preview|debug
<div class="rl-row rl-gap-m rl-padding-xl rl-border">
    <div>Button 1</div>
    <div>Button 2</div>
    <div>Button 3</div>
</div>
```

### Padding with grid

Padding around grid containers creates a frame effect, with space between the grid items and the container edges.

#### `rl-padding-m`

```preview|debug
<div class="rl-grid rl-gap-m rl-padding-m rl-border">
    <div>Card 1</div>
    <div>Card 2</div>
    <div>Card 3</div>
    <div>Card 4</div>
</div>
```

#### `rl-padding-l`

```preview|debug
<div class="rl-grid rl-grid-fit-m rl-gap-m rl-padding-l rl-border">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
</div>
```

#### `rl-padding-xl`

```preview|debug
<div class="rl-grid rl-gap-l rl-padding-xl rl-border">
    <div>Product 1</div>
    <div>Product 2</div>
    <div>Product 3</div>
    <div>Product 4</div>
</div>
```

### Padding with frame

In frame layouts, padding creates space between the container edges and the centered content.

#### `rl-padding-m`

```preview|debug
<div class="rl-frame rl-padding-m rl-border" style="height: 12em;">
    <div>Centered with moderate padding</div>
</div>
```

#### `rl-padding-l`

```preview|debug
<div class="rl-frame rl-padding-l rl-border" style="height: 12em;">
    <div>Centered with large padding</div>
</div>
```

#### `rl-padding-xl`

```preview|debug
<div class="rl-frame rl-padding-xl rl-border" style="height: 15em;">
    <div>Centered with extra large padding</div>
</div>
```

### Combining padding with gap

Padding and gap work together: padding creates space around the container, while gap creates space between items inside it.

```preview|debug
<div class="rl-column rl-gap-m rl-padding-l rl-border">
    <div>Gap controls spacing between items</div>
    <div>Padding controls spacing from container edges</div>
    <div>They work independently</div>
</div>
```

```preview|debug
<div class="rl-row rl-gap-s rl-padding-m rl-border" style="width: 25em;">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
</div>
```

```preview|debug
<div class="rl-grid rl-gap-l rl-padding-xl rl-border">
    <div>Card A</div>
    <div>Card B</div>
    <div>Card C</div>
    <div>Card D</div>
</div>
```

### Padding size comparison

Visual comparison of different padding sizes on the same layout:

```preview
<div class="rl-column rl-gap-m">
    <div class="rl-column rl-padding-xs rl-border">
        <div>Extra small (xs) - 0.125rem</div>
    </div>
    <div class="rl-column rl-padding-s rl-border">
        <div>Small (s) - 0.25rem</div>
    </div>
    <div class="rl-column rl-padding-m rl-border">
        <div>Medium (m) - 0.5rem</div>
    </div>
    <div class="rl-column rl-padding-l rl-border">
        <div>Large (l) - 1rem</div>
    </div>
    <div class="rl-column rl-padding-xl rl-border">
        <div>Extra large (xl) - 1.5rem</div>
    </div>
    <div class="rl-column rl-padding-2xl rl-border">
        <div>Double extra large (2xl) - 2.25rem</div>
    </div>
</div>
```

### Padding with complex layouts

Padding is particularly useful for creating structured, bordered layouts with proper internal spacing.

```preview
<div class="rl-column rl-gap-m rl-padding-l rl-border rl-radius-m">
    <div>Profile Card</div>
    <div class="rl-divider"></div>
    <div class="rl-row rl-gap-s">
        <div>Edit</div>
        <div>Share</div>
        <div>Delete</div>
    </div>
</div>
```

```preview
<div class="rl-column rl-gap-m">
    <div class="rl-row rl-gap-m rl-padding-m rl-border rl-radius-s">
        <div>Header</div>
        <div class="rl-width-fill">Actions</div>
    </div>
    <div class="rl-grid rl-gap-m rl-padding-l rl-border rl-radius-m">
        <div>Content 1</div>
        <div>Content 2</div>
        <div>Content 3</div>
        <div>Content 4</div>
    </div>
</div>
```

```preview
<div class="rl-row rl-justify-between rl-gap-m rl-padding-l rl-border rl-radius-l">
    <div class="rl-column rl-gap-s">
        <div>Section A</div>
        <div>Details here</div>
    </div>
    <div class="rl-column rl-gap-s">
        <div>Section B</div>
        <div>Details here</div>
    </div>
</div>
```

### Responsive padding with nested layouts

Padding can be applied at different levels to create complex spacing hierarchies.

```preview
<div class="rl-column rl-gap-l rl-padding-xl rl-border rl-radius-m">
    <div class="rl-column rl-gap-m rl-padding-l rl-border rl-radius-s">
        <div>Nested container with its own padding</div>
        <div>Creates layered spacing</div>
    </div>
    <div class="rl-row rl-gap-s rl-padding-m rl-border rl-radius-s">
        <div>Tag 1</div>
        <div>Tag 2</div>
        <div>Tag 3</div>
    </div>
</div>
```

### Usage notes

The padding modifier creates internal spacing in layout containers:

**What padding controls:**
- Space between container edges and content on all four sides (top, right, bottom, left)
- Applied uniformly in all directions
- Works identically across all layout types
- Does not affect spacing between items (that's what gap does)

**Padding vs Gap:**
- **Padding**: Creates space between container edge and content
- **Gap**: Creates space between items inside the container
- They work independently and can be combined
- Use padding for "breathing room" around entire layouts
- Use gap for spacing between individual items

**Common use cases:**
- Bordered containers that need internal spacing
- Card layouts with content that shouldn't touch edges
- Navigation bars and toolbars with appropriate spacing
- Frame layouts where centered content needs margin from edges
- Creating visual hierarchy with nested containers

**Best practices:**
- Combine with borders to see padding effect clearly
- Use consistent padding sizes throughout your design system
- Larger padding (l, xl, 2xl) for major containers and sections
- Smaller padding (xs, s, m) for compact UI elements like buttons or chips
- Remember padding adds to the total size of the container

**Default padding:**
By default, all layout containers have no padding (`--rl-padding-default: 0`). You can override this globally:

```css
:root {
  --rl-padding-default: var(--rl-space-m);
}
```

**Technical details:**
- Padding uses CSS `padding` property
- Size values come from CSS custom properties: `--rl-space-*`
- Applied to the layout container itself, not individual items
- Does not collapse like margins - padding is always additive
- Works with any display mode (flex, grid, etc.)
