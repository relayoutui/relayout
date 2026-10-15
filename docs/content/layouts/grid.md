## Grid `(rl-grid)`

The grid places elements in cells of equal width. Each cell has a minimum width, and as many cells fit side by side as the available width allows; the elements that don't fit continue on a new line. The cells widen to share the space that's left.

Grids are well suited for card layouts, image galleries, product listings, dashboard widgets, and any collection of similar items that should be displayed in a uniform grid structure. A grid is also the way to make equal columns that stack on narrow screens; for equal columns that never stack, use a [row](#/content/layouts/row) with `rl-nowrap` and `rl-width-fill` on each element.

#### `rl-grid`

By default, the grid uses `auto-fit` behavior with cells that have a minimum width of `6.25rem` (100px). Cells expand to fill available space.

```preview|debug
<div class="rl-grid">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
    <div>Item 9</div>
</div>
```

### Grid auto-fit variants

Auto-fit behavior collapses empty cells, allowing the cells in use to expand and fill the available space.

Apply class `rl-grid-fit-*` to the grid container, where `*` can be `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

#### `rl-grid-fit-xs` (3.125rem min)

```preview|debug
<div class="rl-grid rl-grid-fit-xs">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
    <div>Item 9</div>
</div>
```

#### `rl-grid-fit-s` (6.25rem min)

```preview|debug
<div class="rl-grid rl-grid-fit-s">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
    <div>Item 9</div>
</div>
```

#### `rl-grid-fit-m` (9.375rem min)

```preview|debug
<div class="rl-grid rl-grid-fit-m">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
    <div>Item 9</div>
</div>
```

#### `rl-grid-fit-l` (12.5rem min)

```preview|debug
<div class="rl-grid rl-grid-fit-l">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
    <div>Item 9</div>
</div>
```

#### `rl-grid-fit-xl` (15.625rem min)

```preview|debug
<div class="rl-grid rl-grid-fit-xl">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
    <div>Item 9</div>
</div>
```

#### `rl-grid-fit-2xl` (20rem min)

```preview|debug
<div class="rl-grid rl-grid-fit-2xl">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
    <div>Item 9</div>
</div>
```

### Grid auto-fill variants

Auto-fill behavior keeps room for empty cells, creating a more rigid grid structure even when a line isn't full.

Apply class `rl-grid-fill-*` to the grid container, where `*` can be `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

#### `rl-grid-fill-xs` (3.125rem min)

```preview|debug
<div class="rl-grid rl-grid-fill-xs">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
    <div>Item 9</div>
</div>
```

#### `rl-grid-fill-s` (6.25rem min)

```preview|debug
<div class="rl-grid rl-grid-fill-s">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
    <div>Item 9</div>
</div>
```

#### `rl-grid-fill-m` (9.375rem min)

```preview|debug
<div class="rl-grid rl-grid-fill-m">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
    <div>Item 9</div>
</div>
```

#### `rl-grid-fill-l` (12.5rem min)

```preview|debug
<div class="rl-grid rl-grid-fill-l">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
    <div>Item 9</div>
</div>
```

#### `rl-grid-fill-xl` (15.625rem min)

```preview|debug
<div class="rl-grid rl-grid-fill-xl">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
    <div>Item 9</div>
</div>
```

#### `rl-grid-fill-2xl` (20rem min)

```preview|debug
<div class="rl-grid rl-grid-fill-2xl">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
    <div>Item 9</div>
</div>
```

### Gap between elements

By default, there is no gap between grid items. The default gap is configurable by overriding variable `--rl-gap-default`.

Apply class `rl-gap-*` to the grid container, where `*` can be `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

#### `rl-gap-l`

```preview|debug
<div class="rl-grid rl-gap-l">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
    <div>Item 9</div>
</div>
```

### Aligning items

Aligning items controls how grid items are positioned within their grid cells along the block (vertical) axis.

Apply class `rl-align-*` to the grid container, where `*` can be `start`, `center`, `end`, or `stretch`.

#### `rl-align-start`

```preview|debug
<div class="rl-grid rl-gap-m rl-align-start" style="min-height: 8em;">
    <div>Short</div>
    <div>Taller content item</div>
    <div>Medium</div>
    <div>Another item</div>
</div>
```

#### `rl-align-center`

```preview|debug
<div class="rl-grid rl-gap-m rl-align-center" style="min-height: 8em;">
    <div>Short</div>
    <div>Taller content item</div>
    <div>Medium</div>
    <div>Another item</div>
</div>
```

#### `rl-align-end`

```preview|debug
<div class="rl-grid rl-gap-m rl-align-end" style="min-height: 8em;">
    <div>Short</div>
    <div>Taller content item</div>
    <div>Medium</div>
    <div>Another item</div>
</div>
```

#### `rl-align-stretch`

```preview|debug
<div class="rl-grid rl-gap-m rl-align-stretch" style="min-height: 8em;">
    <div>Short</div>
    <div>Taller content item</div>
    <div>Medium</div>
    <div>Another item</div>
</div>
```

### Justifying items

Justifying items controls how grid items are positioned within their grid cells along the inline (horizontal) axis.

Apply class `rl-justify-*` to the grid container, where `*` can be `start`, `center`, or `end`.

#### `rl-justify-start`

```preview|debug
<div class="rl-grid rl-grid-fit-l rl-gap-m rl-justify-start">
    <div>A</div>
    <div>Item B</div>
    <div>C</div>
    <div>Item D</div>
</div>
```

#### `rl-justify-center`

```preview|debug
<div class="rl-grid rl-grid-fit-l rl-gap-m rl-justify-center">
    <div>A</div>
    <div>Item B</div>
    <div>C</div>
    <div>Item D</div>
</div>
```

#### `rl-justify-end`

```preview|debug
<div class="rl-grid rl-grid-fit-l rl-gap-m rl-justify-end">
    <div>A</div>
    <div>Item B</div>
    <div>C</div>
    <div>Item D</div>
</div>
```

### Padding around container

By default, there is no padding around the grid container. The default padding is configurable by overriding variable `--rl-padding-default`.

Apply class `rl-padding-*` to the grid container, where `*` can be `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

#### `rl-padding-l`

```preview|debug
<div class="rl-grid rl-gap-m rl-padding-l">
    <div>Card 1</div>
    <div>Card 2</div>
    <div>Card 3</div>
    <div>Card 4</div>
</div>
```

### Border around container

By default, there is no border around the grid container.

Apply class `rl-border` to the grid container.

#### `rl-border`

```preview
<div class="rl-grid rl-gap-m rl-padding-l rl-border">
    <div>Card 1</div>
    <div>Card 2</div>
    <div>Card 3</div>
    <div>Card 4</div>
</div>
```

### Border radius

By default, the border does not have rounded corners. The default radius is configurable by overriding variable `--rl-radius-default`, which will apply only if a border is applied to the container.

Apply class `rl-radius-*` to the grid container, where `*` can be `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

#### `rl-radius-m`

```preview
<div class="rl-grid rl-gap-m rl-padding-l rl-border rl-radius-m">
    <div>Card 1</div>
    <div>Card 2</div>
    <div>Card 3</div>
    <div>Card 4</div>
</div>
```

```preview
<div class="rl-grid rl-gap-m">
    <div class="rl-border rl-radius-s rl-padding-m">Card 1</div>
    <div class="rl-border rl-radius-m rl-padding-m">Card 2</div>
    <div class="rl-border rl-radius-l rl-padding-m">Card 3</div>
    <div class="rl-border rl-radius-xl rl-padding-m">Card 4</div>
</div>
```

### Width

By default, containers take up the full width available to them. Width classes constrain the maximum width and center the container horizontally.

Apply class `rl-width-*` to the container, where `*` can be `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

```preview
<div>
    <div class="rl-grid rl-gap-m rl-radius-m rl-padding-m rl-border rl-width-xs">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
    </div>
    <br />
    <div class="rl-grid rl-gap-m rl-radius-l rl-padding-m rl-border rl-width-s">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
    </div>
</div>
```

### Height

By default, containers take up only the height needed for their content. Height classes control how containers fill vertical space.

Apply class `rl-height-full` to make the container fill 100% of its parent's height. It doesn't scroll on its own: add `rl-scroll` if its content can be taller.

Apply class `rl-height-fill` to make a grid take the remaining height inside a column. See [Height, fill and scroll](#/content/mods/height).

#### `rl-height-full`

```preview|debug
<div style="height: 15em; border: 1px solid #ccc;">
    <div class="rl-grid rl-gap-m rl-height-full rl-border rl-padding-m">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
    </div>
</div>
```

#### `rl-height-fill`

```preview|debug
<div class="rl-column" style="height: 15em; border: 1px solid #ccc;">
    <div class="rl-border rl-padding-m">Header</div>
    <div class="rl-grid rl-gap-m rl-height-fill rl-border rl-padding-m">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
    </div>
</div>
```

### Usage notes

The grid layout uses CSS Grid for responsive cells of equal width:

- **Base class required**: All grid variants (`rl-grid-fit-*`, `rl-grid-fill-*`) must include `rl-grid` class
- **Auto-fit behavior**: Collapses empty cells, allowing the cells in use to expand and fill space
- **Auto-fill behavior**: Keeps room for empty cells, creating a more rigid grid structure
- **Cell sizing**: Uses `grid-template-columns: repeat(auto-fit/fill, minmax(MIN, 1fr))`
- **Minimum widths**: Six size options from `xs` (3.125rem) to `2xl` (20rem)
- **Default variant**: `rl-grid` alone uses auto-fit with 6.25rem minimum (same as `rl-grid-fit-s`)
- **Responsive cells**: The number of cells per line adjusts automatically based on container width and minimum size
- **Alignment**: `rl-align-*` controls vertical positioning within cells, `rl-justify-*` controls horizontal

The grid is ideal for card layouts, image galleries, product listings, and any collection where items should be displayed in cells of equal width that adapt responsively. Use auto-fit when you want cells to expand, auto-fill when you want a more rigid structure.
