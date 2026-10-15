## Gap `(rl-gap-*)`

The gap modifier controls the spacing between child elements in a layout container. Gap provides consistent spacing without the need for margins on individual items. It works with all layout types that use flexbox or grid.

Gap classes are well suited for creating consistent spacing between elements in columns, rows, grids, and frames.

### Gap sizes

By default, there is no gap between elements (`--rl-gap-default` is set to 0). You can apply gap classes to add consistent spacing.

Apply class `rl-gap-*` to any layout container, where `*` can be:

- `0` - 0 (no gap)
- `xs` - 0.125rem (2px)
- `s` - 0.25rem (4px)
- `m` - 0.5rem (8px)
- `l` - 1rem (16px)
- `xl` - 1.5rem (24px)
- `2xl` - 2.25rem (36px)

The default gap value can be customized by overriding the `--rl-gap-default` CSS variable.

### Gap with column layout

In column layouts, gap creates vertical spacing between stacked elements.

#### `rl-gap-m`

```preview|debug
<div class="rl-column rl-gap-m">
    <div>First item</div>
    <div>Second item</div>
    <div>Third item</div>
</div>
```

#### `rl-gap-l`

```preview|debug
<div class="rl-column rl-gap-l">
    <div>First item</div>
    <div>Second item</div>
    <div>Third item</div>
</div>
```

#### Comparing sizes

```preview|debug
<div class="rl-column rl-gap-l">
    <div class="rl-column rl-gap-xs rl-border rl-padding-m">
        <div>Gap XS</div>
        <div>Gap XS</div>
        <div>Gap XS</div>
    </div>
    <div class="rl-column rl-gap-s rl-border rl-padding-m">
        <div>Gap S</div>
        <div>Gap S</div>
        <div>Gap S</div>
    </div>
    <div class="rl-column rl-gap-m rl-border rl-padding-m">
        <div>Gap M</div>
        <div>Gap M</div>
        <div>Gap M</div>
    </div>
</div>
```

### Gap with row layout

In row layouts, gap creates both horizontal and vertical spacing between items as they wrap.

#### `rl-gap-s`

```preview|debug
<div class="rl-row rl-gap-s" style="width: 20em;">
    <div>Tag 1</div>
    <div>Tag 2</div>
    <div>Tag 3</div>
    <div>Tag 4</div>
    <div>Tag 5</div>
    <div>Tag 6</div>
</div>
```

#### `rl-gap-l`

```preview|debug
<div class="rl-row rl-gap-l" style="width: 20em;">
    <div>Tag 1</div>
    <div>Tag 2</div>
    <div>Tag 3</div>
    <div>Tag 4</div>
    <div>Tag 5</div>
    <div>Tag 6</div>
</div>
```

### Gap with grid layout

In grid layouts, gap creates both horizontal and vertical spacing between grid items.

#### `rl-gap-m`

```preview|debug
<div class="rl-grid rl-gap-m">
    <div>Card 1</div>
    <div>Card 2</div>
    <div>Card 3</div>
    <div>Card 4</div>
    <div>Card 5</div>
    <div>Card 6</div>
</div>
```

#### `rl-gap-xl`

```preview|debug
<div class="rl-grid rl-gap-xl">
    <div>Card 1</div>
    <div>Card 2</div>
    <div>Card 3</div>
    <div>Card 4</div>
    <div>Card 5</div>
    <div>Card 6</div>
</div>
```

### Gap with frame layout

In frame layouts, gap creates spacing between multiple items when the frame contains more than one child.

#### `rl-gap-m`

```preview|debug
<div class="rl-frame rl-gap-m" style="height: 12em; border: 1px solid #ccc;">
    <div>Item 1</div>
    <div>Item 2</div>
</div>
```

#### `rl-gap-xl`

```preview|debug
<div class="rl-frame rl-gap-xl" style="height: 12em; border: 1px solid #ccc;">
    <div>Item 1</div>
    <div>Item 2</div>
</div>
```

### Responsive gap values

Gap values can be combined with other layout modifiers for sophisticated designs:

```preview
<div class="rl-column rl-gap-l">
    <div class="rl-row rl-gap-s rl-border rl-padding-m rl-radius-m">
        <div>Badge</div>
        <div>Badge</div>
        <div>Badge</div>
    </div>
    <div class="rl-row rl-justify-between rl-gap-m rl-border rl-padding-m rl-radius-m">
        <div>Left</div>
        <div>Right</div>
    </div>
    <div class="rl-grid rl-gap-m rl-border rl-padding-m rl-radius-m">
        <div>Grid 1</div>
        <div>Grid 2</div>
        <div>Grid 3</div>
        <div>Grid 4</div>
    </div>
</div>
```

### Usage notes

The gap modifier uses CSS flexbox and grid `gap` properties:

- **Universal support**: Works with all layout types (column, row, grid, frame)
- **Consistent spacing**: Creates uniform spacing between all direct children
- **No margin conflicts**: Gap doesn't collapse like margins and doesn't require negative margins
- **Bidirectional**: In wrapping layouts (row, grid), gap applies to both axes
- **Default value**: `--rl-gap-default` is set to 0; override to change the baseline
- **Custom values**: Override CSS variables to customize gap sizes globally

Gap is particularly useful compared to traditional margins because:
- It only creates space between items (not before the first or after the last)
- It's easier to maintain and reason about
- It automatically adjusts when items wrap
- No need to use selectors like `:not(:last-child)` or negative margins

To customize gap values globally, override the space CSS variables:

```css
:root {
  --rl-gap-default: var(--rl-space-m);
  --rl-space-l: 1.25rem;
}
```
