## Row `(rl-row)`

The row arranges elements horizontally. **A row wraps by default**: when the elements don't fit in the available width, they continue on the next line. Apply `rl-nowrap` to keep them on one line.

Rows are well suited for headers, toolbars, navigation, button groups, tags, and any group of elements placed side by side. With the fill and justify modifiers, a row also makes sidebars and elements pushed to opposite ends.

#### `rl-row`

By default, items flow from left to right and wrap to the next line when needed.

```preview|debug
<div class="rl-row">
    <div>Tag one</div>
    <div>Tag two</div>
    <div>Tag three</div>
    <div>Tag four</div>
    <div>Tag five</div>
    <div>Tag six</div>
</div>
```

```preview|debug
<div class="rl-row" style="width: 15em;">
    <div>Action</div>
    <div>Edit</div>
    <div>Delete</div>
    <div>Share</div>
    <div>Export</div>
</div>
```

### Gap between elements

By default, there is no gap between the row elements. The default gap is configurable by overriding variable `--rl-gap-default`.

Apply class `rl-gap-*` to the row container, where `*` can be `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

#### `rl-gap-s`

```preview|debug
<div class="rl-row rl-gap-s" style="width: 20em;">
    <div>React</div>
    <div>Vue</div>
    <div>Angular</div>
    <div>Svelte</div>
    <div>Solid</div>
    <div>Lit</div>
</div>
```

### Aligning elements

Aligning elements refers to positioning elements along the cross axis.

In the row layout, the cross axis is the vertical axis, so when aligning elements in a row, they are positioned vertically relative to it.

Apply class `rl-align-*` to the row container, where `*` can be `start`, `center`, `end`, or `stretch`.

#### `rl-align-start`

```preview|debug
<div class="rl-row rl-gap-m rl-align-start" style="height: 8em;">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

#### `rl-align-center` (default)

```preview|debug
<div class="rl-row rl-gap-m rl-align-center" style="height: 8em;">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

#### `rl-align-end`

```preview|debug
<div class="rl-row rl-gap-m rl-align-end" style="height: 8em;">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

#### `rl-align-stretch`

```preview|debug
<div class="rl-row rl-gap-m rl-align-stretch" style="height: 8em;">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

### Justifying elements

Justifying elements refers to positioning elements along the main axis.

In the row layout, the main axis is the horizontal axis, so justifying positions the elements horizontally.

Apply class `rl-justify-*` to the row container, where `*` can be `start`, `center`, `end`, or `between`.

#### `rl-justify-start` (default)

```preview|debug
<div class="rl-row rl-justify-start rl-gap-m">
    <div>One</div>
    <div>Two</div>
    <div>Three</div>
</div>
```

#### `rl-justify-center`

```preview|debug
<div class="rl-row rl-justify-center rl-gap-m">
    <div>One</div>
    <div>Two</div>
    <div>Three</div>
</div>
```

#### `rl-justify-end`

```preview|debug
<div class="rl-row rl-justify-end rl-gap-m">
    <div>One</div>
    <div>Two</div>
    <div>Three</div>
</div>
```

#### `rl-justify-between`

The first element sits at the start and the last at the end, with the space shared between them. It's the usual way to push two groups apart, such as a logo and the navigation in a header.

```preview|debug
<div class="rl-row rl-justify-between rl-gap-m">
    <div>Start</div>
    <div>End</div>
</div>
```

The gap is the smallest space left between elements; `rl-justify-between` adds the rest.

```preview|debug
<div class="rl-row rl-justify-between rl-gap-m">
    <div>Logo</div>
    <div class="rl-row rl-gap-m">
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
    </div>
</div>
```

It usually has two elements. With three or more, each wrapped line is spaced on its own: a single element on a line sits at the start, and nothing lines up with the line above. Group the elements into two, as above, or use [grid](#/content/layouts/grid) when they should line up.

```preview|debug
<div class="rl-row rl-justify-between rl-gap-m">
    <div>Left</div>
    <div>Center</div>
    <div>Right</div>
</div>
```

### Filling the space

By default, row elements take only the width they need. To let one element take the space the others leave, put a fill class on that element, not on the row. Any element can fill: the first, the last, or one in the middle.

Apply class `rl-width-fill` to an element to make it grow and take the remaining width. When the row is too narrow, the element drops to its own line rather than shrink below its longest word.

#### `rl-width-fill`

```preview|debug
<div class="rl-row rl-gap-m">
    <div>Label</div>
    <div class="rl-width-fill">This content fills the remaining space</div>
</div>
```

```preview|debug
<div class="rl-row rl-gap-m">
    <div class="rl-width-fill">This content fills the remaining space</div>
    <div>Actions</div>
</div>
```

Several fill elements share the remaining width equally. With `rl-nowrap`, they never wrap and stay the same width; use [grid](#/content/layouts/grid) instead when they should stack on narrow screens.

```preview|debug
<div class="rl-row rl-nowrap rl-gap-m">
    <div class="rl-width-fill">Equal width</div>
    <div class="rl-width-fill">Equal width</div>
    <div class="rl-width-fill">Equal width</div>
</div>
```

Apply class `rl-height-fill` to an element to stretch it to the row's height, even when the row aligns its elements with `rl-align-*`.

#### `rl-height-fill`

```preview|debug
<div class="rl-row rl-gap-m" style="height: 6em;">
    <div>Acta non verba</div>
    <div class="rl-height-fill">Tempus fugit</div>
    <div>Faber est suae quisque fortunae</div>
</div>
```

The [recipes](#/content/start/recipes) show the common patterns, such as a header, a sidebar, and equal columns.
### Wrapping

By default, row elements wrap to the next line when they don't fit in the available width.

#### `rl-nowrap`

Apply class `rl-nowrap` to keep the elements on one line. Elements that don't fit overflow the row, unless an `rl-width-fill` element can shrink: in a row that doesn't wrap, a fill element can get narrower than its content.

```preview|debug
<div class="rl-row rl-gap-m rl-nowrap" style="width: 15em;">
    <div>Long item one</div>
    <div>Long item two</div>
    <div>Long item three</div>
</div>
```

### Padding around container

By default, there is no padding around the row container. The default padding is configurable by overriding variable `--rl-padding-default`.

Apply class `rl-padding-*` to the row container, where `*` can be `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

#### `rl-padding-l`

```preview|debug
<div class="rl-row rl-gap-m rl-padding-l">
    <div>Tag 1</div>
    <div>Tag 2</div>
    <div>Tag 3</div>
</div>
```

### Border around container

By default, there is no border around the row container.

Apply class `rl-border` to the row container.

#### `rl-border`

```preview
<div class="rl-row rl-gap-m rl-padding-l rl-border">
    <div>Option A</div>
    <div>Option B</div>
    <div>Option C</div>
</div>
```

### Border radius

By default, the border does not have rounded corners. The default radius is configurable by overriding variable `--rl-radius-default`, which will apply only if a border is applied to the container.

Apply class `rl-radius-*` to the row container, where `*` can be `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

#### `rl-radius-m`

```preview
<div class="rl-row rl-gap-m rl-padding-l rl-border rl-radius-m">
    <div>Button 1</div>
    <div>Button 2</div>
    <div>Button 3</div>
</div>
```

### Width

By default, containers take up the full width available to them. Width classes constrain the maximum width and center the container horizontally.

Apply class `rl-width-*` to the container, where `*` can be `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

```preview
<div>
    <div class="rl-row rl-gap-s rl-radius-m rl-padding-m rl-border rl-width-s">
        <div>Small</div>
        <div>Width</div>
        <div>Container</div>
    </div>
    <br />
    <div class="rl-row rl-gap-s rl-radius-l rl-padding-m rl-border rl-width-l">
        <div>Large</div>
        <div>Width</div>
        <div>Container</div>
    </div>
</div>
```

### Height

By default, containers take up only the height needed for their content. Height classes control how containers fill vertical space.

Apply class `rl-height-full` to make the container fill 100% of its parent's height. It doesn't scroll on its own: add `rl-scroll` if its content can be taller.

Apply class `rl-height-fill` to make a row take the remaining height inside a column. See [Height, fill and scroll](#/content/mods/height).

#### `rl-height-full`

```preview|debug
<div style="height: 10em; border: 1px solid #ccc;">
    <div class="rl-row rl-height-full rl-border rl-padding-m rl-gap-m">
        <div>Badge 1</div>
        <div>Badge 2</div>
        <div>Badge 3</div>
    </div>
</div>
```

#### `rl-height-fill`

```preview|debug
<div class="rl-column" style="height: 15em; border: 1px solid #ccc;">
    <div class="rl-border rl-padding-m">Header</div>
    <div class="rl-row rl-height-fill rl-border rl-padding-m rl-gap-m">
        <div>Tag A</div>
        <div>Tag B</div>
        <div>Tag C</div>
    </div>
</div>
```

### Usage notes

The row layout creates a natural flowing horizontal arrangement:

- **Flow direction**: Horizontal (left to right by default)
- **Wrapping behavior**: Elements wrap to the next line automatically when space runs out
- **Main axis**: Horizontal (controlled by `justify-content`)
- **Cross axis**: Vertical (controlled by `align-items`)
- **Default alignment**: `center` aligns items vertically in the middle
- **Default justify**: `start` positions items from the left
- **Intrinsic sizing**: Elements take only the space they need, unless they have `rl-width-fill`
- **Prevent wrapping**: Apply `rl-nowrap` to keep all items on one line
- **Pushing apart**: Apply `rl-justify-between` to place the first and last elements at the ends

The row is the layout for anything placed side by side: headers, toolbars, sidebars next to content, tags, and button groups. Unlike grid layouts with equal cells, rows adapt to the size of their content.
