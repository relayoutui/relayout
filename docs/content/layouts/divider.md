## Divider `(rl-divider)`

The divider creates a visual separator line between elements. By default, it renders as a horizontal line, but can be configured to display vertically. Dividers are simple, empty elements that stretch to fill the available space in their container.

Dividers are well suited for separating list items, sections of content, menu items, and creating visual distinction between groups of elements.

#### `rl-divider`

By default, the divider creates a horizontal line that stretches to fill the full width of its container.

```preview
<div class="rl-column rl-gap-m">
    <div>Acta non verba</div>
    <div class="rl-divider"></div>
    <div>Tempus fugit</div>
    <div class="rl-divider"></div>
    <div>Faber est suae quisque fortunae</div>
</div>
```

### Dividers in different layouts

Dividers adapt to their container and work seamlessly with different layout types.

#### Dividers in column

```preview
<div class="rl-column rl-border">
    <div class="rl-padding-m">First item</div>
    <div class="rl-divider"></div>
    <div class="rl-padding-m">Second item</div>
    <div class="rl-divider"></div>
    <div class="rl-padding-m">Third item</div>
</div>
```

#### Dividers in row

```preview
<div class="rl-row rl-gap-m">
    <div>Tag 1</div>
    <div class="rl-divider vertical"></div>
    <div>Tag 2</div>
    <div class="rl-divider vertical"></div>
    <div>Tag 3</div>
</div>
```

#### Dividers in a row with `rl-justify-between`

```preview
<div class="rl-row rl-justify-between rl-gap-m">
    <div>Left item</div>
    <div class="rl-divider vertical"></div>
    <div>Right item</div>
</div>
```

### Vertical dividers

Apply class `vertical` to the divider element to create a vertical separator line.

#### `.vertical`

```preview|debug
<div class="rl-row rl-gap-m" style="height: 5em;">
    <div>Navigation</div>
    <div class="rl-divider vertical"></div>
    <div class="rl-width-fill">Content</div>
</div>
```

Vertical dividers are particularly useful in rows.

```preview
<div class="rl-row rl-gap-l rl-padding-m rl-border">
    <div>Home</div>
    <div class="rl-divider vertical"></div>
    <div>About</div>
    <div class="rl-divider vertical"></div>
    <div class="rl-width-fill">Contact</div>
</div>
```

### Combining with borders and padding

Dividers work well with bordered containers and padded elements to create clean, separated layouts.

```preview
<div class="rl-column rl-border rl-radius-m">
    <div class="rl-padding-m">Profile Information</div>
    <div class="rl-divider"></div>
    <div class="rl-padding-m">Account Settings</div>
    <div class="rl-divider"></div>
    <div class="rl-padding-m">Privacy Options</div>
</div>
```

```preview
<div class="rl-column rl-gap-m">
    <div class="rl-column rl-border rl-radius-m">
        <div class="rl-padding-m">Item 1</div>
        <div class="rl-divider"></div>
        <div class="rl-padding-m">Item 2</div>
    </div>
    <div class="rl-column rl-border rl-radius-m">
        <div class="rl-padding-m">Item 3</div>
        <div class="rl-divider"></div>
        <div class="rl-padding-m">Item 4</div>
    </div>
</div>
```

### Menu and navigation examples

Dividers are commonly used in menus and navigation components.

```preview
<div class="rl-row rl-gap-m rl-border rl-padding-m rl-radius-m">
    <div>Logo</div>
    <div class="rl-divider vertical"></div>
    <div class="rl-row rl-gap-m rl-width-fill">
        <div>Products</div>
        <div class="rl-divider vertical"></div>
        <div>Services</div>
        <div class="rl-divider vertical"></div>
        <div>About</div>
    </div>
</div>
```

```preview
<div class="rl-column rl-border rl-radius-m rl-width-xs">
    <div class="rl-padding-m">Dashboard</div>
    <div class="rl-divider"></div>
    <div class="rl-padding-m">Projects</div>
    <div class="rl-divider"></div>
    <div class="rl-padding-m">Team</div>
    <div class="rl-divider"></div>
    <div class="rl-padding-m">Settings</div>
</div>
```

### Usage notes

The divider is a simple layout element with specific characteristics:

- Dividers are empty elements (no content should be placed inside them)
- Horizontal dividers stretch to 100% width with zero height and a top border
- Vertical dividers stretch to 100% height with zero width and a left border
- Dividers use the `--rl-border-default` CSS variable for styling
- Dividers automatically align themselves using `align-self: stretch`
- They work best when paired with gap or padding classes for proper spacing

To customize the divider appearance globally, override the `--rl-border-default` CSS variable:

```css
:root {
  --rl-border-default: solid 2px #e0e0e0;
}
```
