## Align `(rl-align-*)`

The align modifier controls how elements are positioned along the cross axis in a layout container. The cross axis is perpendicular to the main axis - in horizontal layouts, align controls vertical positioning; in vertical layouts, it controls horizontal positioning.

Align classes work with all layout types and provide consistent cross-axis positioning across different layout patterns.

### Align values

Apply class `rl-align-*` to any layout container, where `*` can be:

- `start` - Aligns items to the start of the cross axis
- `center` - Centers items along the cross axis
- `end` - Aligns items to the end of the cross axis
- `stretch` - Stretches items to fill the cross axis

The behavior of each value depends on the layout type and its main axis direction.

### Align with column layout

In column layouts, the **cross axis is horizontal** (since the main axis is vertical). Align controls how items are positioned horizontally and also affects text alignment.

#### `rl-align-start`

```preview|debug
<div class="rl-column rl-align-start rl-gap-m">
    <div>Aligned to start</div>
    <div>Short text</div>
    <div>This is a longer piece of content</div>
</div>
```

#### `rl-align-center`

```preview|debug
<div class="rl-column rl-align-center rl-gap-m">
    <div>Centered alignment</div>
    <div>Short</div>
    <div>This is a longer piece of content</div>
</div>
```

#### `rl-align-end`

```preview|debug
<div class="rl-column rl-align-end rl-gap-m">
    <div>Aligned to end</div>
    <div>Short text</div>
    <div>This is a longer piece of content</div>
</div>
```

#### `rl-align-stretch` (default)

```preview|debug
<div class="rl-column rl-align-stretch rl-gap-m">
    <div>Stretched to full width</div>
    <div>Short text</div>
    <div>This is a longer piece of content</div>
</div>
```

Column alignment also controls text alignment within elements:

```preview
<div class="rl-column rl-gap-m rl-border rl-padding-m">
    <div class="rl-column rl-align-start rl-border rl-padding-s">
        <div>Start aligned text</div>
    </div>
    <div class="rl-column rl-align-center rl-border rl-padding-s">
        <div>Center aligned text</div>
    </div>
    <div class="rl-column rl-align-end rl-border rl-padding-s">
        <div>End aligned text</div>
    </div>
</div>
```

### Align with row layout

In row layouts, the **cross axis is vertical**. Align controls how items are positioned vertically within the container.

#### `rl-align-start`

```preview|debug
<div class="rl-row rl-align-start rl-gap-m" style="height: 8em; border: 1px solid #ccc;">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
</div>
```

#### `rl-align-center` (default)

```preview|debug
<div class="rl-row rl-align-center rl-gap-m" style="height: 8em; border: 1px solid #ccc;">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
</div>
```

#### `rl-align-end`

```preview|debug
<div class="rl-row rl-align-end rl-gap-m" style="height: 8em; border: 1px solid #ccc;">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
</div>
```

#### `rl-align-stretch`

```preview|debug
<div class="rl-row rl-align-stretch rl-gap-m" style="height: 8em; border: 1px solid #ccc;">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
</div>
```

### Align with grid layout

In grid layouts, align controls how items are positioned **within their grid cells** along the vertical axis.

#### `rl-align-start`

```preview|debug
<div class="rl-grid rl-gap-m rl-align-start" style="min-height: 10em; border: 1px solid #ccc;">
    <div>Short</div>
    <div>Taller content that takes more vertical space</div>
    <div>Medium content</div>
    <div>Another item</div>
</div>
```

#### `rl-align-center`

```preview|debug
<div class="rl-grid rl-gap-m rl-align-center" style="min-height: 10em; border: 1px solid #ccc;">
    <div>Short</div>
    <div>Taller content that takes more vertical space</div>
    <div>Medium content</div>
    <div>Another item</div>
</div>
```

#### `rl-align-end`

```preview|debug
<div class="rl-grid rl-gap-m rl-align-end" style="min-height: 10em; border: 1px solid #ccc;">
    <div>Short</div>
    <div>Taller content that takes more vertical space</div>
    <div>Medium content</div>
    <div>Another item</div>
</div>
```

#### `rl-align-stretch`

```preview|debug
<div class="rl-grid rl-gap-m rl-align-stretch" style="min-height: 10em; border: 1px solid #ccc;">
    <div>Short</div>
    <div>Taller content that takes more vertical space</div>
    <div>Medium content</div>
    <div>Another item</div>
</div>
```

### Align with frame layout

In frame layouts, align controls **vertical positioning** of the content within the frame.

#### `rl-align-start`

```preview|debug
<div class="rl-frame rl-align-start rl-gap-m" style="height: 12em; border: 1px solid #ccc;">
    <div>Content at top</div>
</div>
```

#### `rl-align-center` (default)

```preview|debug
<div class="rl-frame rl-align-center rl-gap-m" style="height: 12em; border: 1px solid #ccc;">
    <div>Content centered vertically</div>
</div>
```

#### `rl-align-end`

```preview|debug
<div class="rl-frame rl-align-end rl-gap-m" style="height: 12em; border: 1px solid #ccc;">
    <div>Content at bottom</div>
</div>
```

#### `rl-align-stretch`

```preview|debug
<div class="rl-frame rl-align-stretch rl-gap-m" style="height: 12em; border: 1px solid #ccc;">
    <div>Content stretched vertically</div>
</div>
```

### Combining with other modifiers

Align works well with other layout modifiers for sophisticated designs:

```preview
<div class="rl-column rl-gap-l">
    <div class="rl-row rl-align-start rl-gap-m rl-border rl-padding-m rl-radius-m" style="height: 6em;">
        <div>Badge</div>
        <div>Tag</div>
        <div>Label</div>
    </div>
    <div class="rl-row rl-align-center rl-gap-m rl-border rl-padding-m rl-radius-m" style="height: 6em;">
        <div>Logo</div>
        <div class="rl-width-fill">Navigation</div>
    </div>
    <div class="rl-row rl-justify-between rl-align-end rl-gap-m rl-border rl-padding-m rl-radius-m" style="height: 6em;">
        <div>Left</div>
        <div>Right</div>
    </div>
</div>
```

### Usage notes

The align modifier uses CSS flexbox and grid `align-items` properties:

- **Cross axis positioning**: Align always works perpendicular to the main layout direction
- **Column specificity**: In columns, align also controls `text-align` for proper text positioning
- **Vertical layouts** (column): Cross axis is horizontal, align controls horizontal positioning
- **Horizontal layouts** (row): Cross axis is vertical, align controls vertical positioning
- **Grid layouts**: Align positions items within their individual grid cells vertically
- **Frame layouts**: Align controls vertical positioning of centered content
- **Default values**: Row defaults to `center`, column defaults to `stretch`
- **Stretch behavior**: `stretch` makes elements fill the cross axis unless they have intrinsic dimensions
- **Fill elements**: An element with `rl-width-fill` in a column, or `rl-height-fill` in a row, stretches across whatever the align value (see [Height, fill and scroll](#/content/mods/height))

Key differences by layout:

| Layout  | Main Axis | Cross Axis | Align Controls | Default   |
|---------|-----------|------------|----------------|-----------|
| Column  | Vertical  | Horizontal | Horizontal pos | `stretch` |
| Row     | Horizontal| Vertical   | Vertical pos   | `center`  |
| Grid    | N/A       | N/A        | Vertical in cell | None    |
| Frame   | Both      | N/A        | Vertical pos   | `center`  |

Understanding the main and cross axes is crucial for effective use of align modifiers. The cross axis is always perpendicular to the direction elements flow in the layout.
