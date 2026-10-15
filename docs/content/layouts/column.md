## Column `(rl-column)`

The column arranges the elements vertically, with consistent spacing between them. The elements in a column can be aligned horizontally to the start, center, or end, or they can stretch and fill the horizontal space.

Columns are well suited for forms, text, and ensuring consistent spacing between elements in the document flow.

#### `rl-column`

By default, items in the column are stretched, filling the available width.

```preview|debug
<div class="rl-column">
    <div>Acta non verba</div>
    <div>Tempus fugit</div>
    <div>Faber est suae quisque fortunae</div>
</div>
```

### Gap between elements

By default, there is no gap between the column elements. The default gap is configurable by overriding variable `--rl-gap-default`.

Apply class `rl-gap-*` to the column container, where `*` can be `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

#### `rl-gap-l`

```preview|debug
<div class="rl-column rl-gap-l">
    <div>Acta non verba</div>
    <div>Tempus fugit</div>
    <div>Faber est suae quisque fortunae</div>
</div>
```

### Aligning elements

Aligning elements refers to positioning elements along the cross axis. 

In the column layout, the cross axis is the horizontal axis, so aligning positions the elements horizontally.

Apply class `rl-align-*` to the column container, where `*` can be `start`, `center`, `end`, or `stretch`.

Except for `stretch`, all other align classes make the elements take only as much space as they need.

#### `rl-align-start`

```preview|debug
<div class="rl-column rl-align-start">
    <div>Acta non verba</div>
    <div>Tempus fugit</div>
    <div>Faber est suae quisque fortunae</div>
</div>
```

#### `rl-align-center`

```preview|debug
<div class="rl-column rl-align-center">
    <div>Acta non verba</div>
    <div>Tempus fugit</div>
    <div>Faber est suae quisque fortunae</div>
</div>
```

#### `rl-align-end`

```preview|debug
<div class="rl-column rl-align-end">
    <div>Acta non verba</div>
    <div>Tempus fugit</div>
    <div>Faber est suae quisque fortunae</div>
</div>
```

#### `rl-align-stretch` (default)

```preview|debug
<div class="rl-column rl-align-stretch">
    <div>Acta non verba</div>
    <div>Tempus fugit</div>
    <div>Faber est suae quisque fortunae</div>
</div>
```

### Justifying elements

Justifying elements refers to positioning elements along the main axis. 

In the column layout, the main axis is the vertical axis, so justifying positions the elements vertically.

Apply class `rl-justify-*` to the column container, where `*` can be `start`, `center`, `end`, or `between`.

Because the column and its elements only occupy as much space as needed vertically, justifying elements has effect only when the column container height is greater than the elements inside it.

#### `rl-justify-start` (default)

```preview|debug
<div class="rl-column rl-justify-start" style="height: 10em;">
    <div>Acta non verba</div>
    <div>Tempus fugit</div>
    <div>Faber est suae quisque fortunae</div>
</div>
```

#### `rl-justify-center`

```preview|debug
<div class="rl-column rl-justify-center" style="height: 10em;">
    <div>Acta non verba</div>
    <div>Tempus fugit</div>
    <div>Faber est suae quisque fortunae</div>
</div>
```

#### `rl-justify-end`

```preview|debug
<div class="rl-column rl-justify-end" style="height: 10em;">
    <div>Acta non verba</div>
    <div>Tempus fugit</div>
    <div>Faber est suae quisque fortunae</div>
</div>
```

#### `rl-justify-between`

The first element sits at the top and the last at the bottom, with the space shared between them.

```preview|debug
<div class="rl-column rl-justify-between" style="height: 10em;">
    <div>Acta non verba</div>
    <div>Tempus fugit</div>
    <div>Faber est suae quisque fortunae</div>
</div>
```

### Filling the space

Column elements keep their height: they don't shrink when the column is shorter than its content. To let one element take the space the others leave, put a fill class on that element, not on the column.

Apply class `rl-height-fill` to an element to make it grow and take the remaining height. It can shrink below its content, so when the column has a fixed height, add `rl-scroll` to the same element to scroll what doesn't fit.

#### `rl-height-fill`

```preview|debug
<div class="rl-column" style="height: 15em;">
    <div>Header</div>
    <div class="rl-height-fill">Grows to take the remaining height</div>
    <div>Footer</div>
</div>
```

#### `rl-height-fill rl-scroll`

```preview|debug
<div class="rl-column" style="height: 12em;">
    <div>Header</div>
    <div class="rl-height-fill rl-scroll">
        <div>Acta non verba</div>
        <div>Tempus fugit</div>
        <div>Faber est suae quisque fortunae</div>
        <div>Veni, vidi, vici</div>
        <div>Carpe diem</div>
        <div>Alea iacta est</div>
        <div>Festina lente</div>
        <div>Ars longa, vita brevis</div>
    </div>
    <div>Footer</div>
</div>
```

Apply class `rl-width-fill` to an element to stretch it across the column, even when the column aligns its elements with `rl-align-*`.

#### `rl-width-fill`

```preview|debug
<div class="rl-column rl-align-center">
    <div>Acta non verba</div>
    <div class="rl-width-fill">Tempus fugit</div>
    <div>Faber est suae quisque fortunae</div>
</div>
```

### Dividers between elements

Column elements can be visually separated by adding divider lines between them.

Apply class `rl-divider` to an empty element placed at the same level as the other column elements. 

#### `rl-divider`

```preview
<div class="rl-column rl-gap-m">
    <div>Acta non verba</div>
    <div class="rl-divider"></div>
    <div>Tempus fugit</div>
    <div class="rl-divider"></div>
    <div>Faber est suae quisque fortunae</div>
</div>
```

### Padding around container

By default, there is no padding around the column container. The default padding is configurable by overriding variable `--rl-padding-default`.

Apply class `rl-padding-*` to the column container, where `*` can be `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

#### `rl-padding-l`

```preview|debug
<div class="rl-column rl-padding-l">
    <div>Acta non verba</div>
    <div>Tempus fugit</div>
    <div>Faber est suae quisque fortunae</div>
</div>
```

### Border around container

By default, there is no border around the column container. 

Apply class `rl-border` to the column container.

#### `rl-border`

```preview
<div class="rl-column rl-gap-m rl-padding-l rl-border">
    <div>Acta non verba</div>
    <div class="rl-divider"></div>
    <div>Tempus fugit</div>
    <div class="rl-divider"></div>
    <div>Faber est suae quisque fortunae</div>
</div>
```

```preview
<div class="rl-column rl-border">
    <div class="rl-padding-m">Acta non verba</div>
    <div class="rl-divider"></div>
    <div class="rl-padding-m">Tempus fugit</div>
    <div class="rl-divider"></div>
    <div class="rl-padding-m">Faber est suae quisque fortunae</div>
</div>
```

### Border radius

By default, the border does not have rounded corners. The default radius is configurable by overriding variable `--rl-radius-default`, which will apply only if a border is applied to the container.

Apply class `rl-radius-*` to the column container, where `*` can be `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

#### `rl-radius-l`

```preview
<div class="rl-column rl-border rl-radius-m">
    <div class="rl-padding-m">Acta non verba</div>
    <div class="rl-divider"></div>
    <div class="rl-padding-m">Tempus fugit</div>
    <div class="rl-divider"></div>
    <div class="rl-padding-m">Faber est suae quisque fortunae</div>
</div>
```

```preview
<div class="rl-column rl-gap-m">
    <div class="rl-border rl-radius-m rl-padding-m">Acta non verba</div>
    <div class="rl-border rl-radius-l rl-padding-m">Tempus fugit</div>
    <div class="rl-border rl-radius-xl rl-padding-m">Faber est suae quisque fortunae</div>
</div>
```

### Width

By default, containers take up the full width available to them. Width classes constrain the maximum width and center the container horizontally.

Apply class `rl-width-*` to the container, where `*` can be `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

```preview
<div>
    <div class="rl-radius-m rl-padding-m rl-border rl-width-xs">Acta non verba</div>
    <br />
    <div class="rl-radius-l rl-padding-m rl-border  rl-width-s">Tempus fugit</div>
</div>
```

### Height

By default, containers take up only the height needed for their content. Height classes control how containers fill vertical space.

Apply class `rl-height-full` to make the container fill 100% of its parent's height. It doesn't scroll on its own: add `rl-scroll` if its content can be taller.

Apply class `rl-height-fill` to make a column take the remaining height inside another column (see *Filling the space* above).

#### `rl-height-full`

```preview|debug
<div style="height: 15em; border: 1px solid #ccc;">
    <div class="rl-column rl-height-full rl-border rl-padding-m">
        <div>Fills parent height</div>
        <div>Add rl-scroll to scroll content that doesn't fit</div>
    </div>
</div>
```

#### `rl-height-fill`

```preview|debug
<div class="rl-column" style="height: 15em; border: 1px solid #ccc;">
    <div class="rl-border rl-padding-m">Fixed height item</div>
    <div class="rl-column rl-height-fill rl-border rl-padding-m">
        <div>Grows to fill remaining space</div>
    </div>
</div>
```

See [Height, fill and scroll](#/content/mods/height) for how the fill classes work in a column and in a row.

### Usage notes

The column layout is a fundamental vertical layout pattern with specific characteristics:

- **Main axis**: Vertical (controlled by `justify-content`)
- **Cross axis**: Horizontal (controlled by `align-items`)
- **Default alignment**: `stretch` makes children fill the horizontal space
- **Text alignment**: The `rl-align-*` classes also set `text-align` for proper text positioning
- **Gap behavior**: Uses CSS flexbox `gap` property for consistent spacing
- **Vertical space**: By default, columns only take as much vertical space as their content needs
- **No shrinking**: Elements keep their height; only an `rl-height-fill` element grows or shrinks
- **Justify effect**: `rl-justify-*` classes only have visible effect when the container height exceeds content height

The column is ideal when you need consistent vertical spacing and want elements to sit one below another without manual margin management.