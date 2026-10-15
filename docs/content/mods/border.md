## Border `(rl-border)`

The border modifier adds a border around a layout container. The border uses the global `--rl-border-default` CSS variable, which can be customized to match your design system. By default, borders have square corners, but they respect any border-radius modifier applied.

Apply class `rl-border` to a layout container to add a border around it.

### Border with column

Borders on columns create clear visual boundaries for vertical content groups.

#### `rl-border`

```preview
<div class="rl-column rl-border rl-padding-m">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

```preview
<div class="rl-column rl-border rl-gap-m rl-padding-l">
    <div>Profile Information</div>
    <div>Account Settings</div>
    <div>Privacy Options</div>
</div>
```

### Border with row

Borders on rows are useful for creating contained groups of tags, badges, or buttons.

```preview
<div class="rl-row rl-border rl-gap-m rl-padding-m">
    <div>Tag 1</div>
    <div>Tag 2</div>
    <div>Tag 3</div>
    <div>Tag 4</div>
</div>
```

```preview
<div class="rl-row rl-border rl-gap-s rl-padding-l">
    <div>React</div>
    <div>Vue</div>
    <div>Angular</div>
    <div>Svelte</div>
</div>
```

### Border with grid

Borders on grids create framed grid layouts, useful for card collections or galleries.

```preview
<div class="rl-grid rl-border rl-gap-m rl-padding-m">
    <div>Card 1</div>
    <div>Card 2</div>
    <div>Card 3</div>
    <div>Card 4</div>
</div>
```

```preview
<div class="rl-grid rl-grid-fit-m rl-border rl-gap-l rl-padding-l">
    <div>Item A</div>
    <div>Item B</div>
    <div>Item C</div>
    <div>Item D</div>
    <div>Item E</div>
    <div>Item F</div>
</div>
```

### Border with frame

Borders on frames create clear boundaries for centered content, useful for modals or hero sections.

```preview
<div class="rl-frame rl-border rl-padding-m" style="height: 12em;">
    <div>Centered Content</div>
</div>
```

```preview
<div class="rl-frame rl-border rl-padding-l" style="height: 15em;">
    <div>
        <h3>Hero Section</h3>
        <p>Centered with border</p>
    </div>
</div>
```

### Combining border with radius

Borders can be combined with border-radius modifiers to create rounded corners. The `--rl-radius-default` variable controls the default radius when `rl-border` is applied.

```preview
<div class="rl-column rl-gap-m">
    <div class="rl-column rl-border rl-radius-s rl-padding-m rl-gap-s">
        <div>Small radius (0.25rem)</div>
        <div>Creates subtle rounded corners</div>
    </div>
    <div class="rl-column rl-border rl-radius-m rl-padding-m rl-gap-s">
        <div>Medium radius (0.5rem)</div>
        <div>Moderate rounded corners</div>
    </div>
    <div class="rl-column rl-border rl-radius-l rl-padding-m rl-gap-s">
        <div>Large radius (1rem)</div>
        <div>Prominent rounded corners</div>
    </div>
</div>
```

```preview
<div class="rl-row rl-border rl-radius-xl rl-gap-m rl-padding-l">
    <div>Button 1</div>
    <div>Button 2</div>
    <div>Button 3</div>
</div>
```

### Borders on individual items

While the border modifier is typically applied to containers, individual items can also have borders for more complex designs.

```preview
<div class="rl-column rl-gap-m">
    <div class="rl-border rl-radius-m rl-padding-m">Item with border 1</div>
    <div class="rl-border rl-radius-m rl-padding-m">Item with border 2</div>
    <div class="rl-border rl-radius-m rl-padding-m">Item with border 3</div>
</div>
```

```preview
<div class="rl-grid rl-gap-m">
    <div class="rl-border rl-radius-s rl-padding-m">Card A</div>
    <div class="rl-border rl-radius-s rl-padding-m">Card B</div>
    <div class="rl-border rl-radius-s rl-padding-m">Card C</div>
    <div class="rl-border rl-radius-s rl-padding-m">Card D</div>
</div>
```

### Nested borders

Borders can be applied at multiple levels to create layered visual hierarchies.

```preview
<div class="rl-column rl-border rl-radius-m rl-gap-m rl-padding-l">
    <div>Outer container with border</div>
    <div class="rl-column rl-border rl-radius-s rl-gap-s rl-padding-m">
        <div>Nested container</div>
        <div>Also with border</div>
    </div>
</div>
```

```preview
<div class="rl-column rl-border rl-radius-l rl-gap-l rl-padding-xl">
    <div class="rl-row rl-border rl-radius-m rl-gap-m rl-padding-m">
        <div>Tag 1</div>
        <div>Tag 2</div>
        <div>Tag 3</div>
    </div>
    <div class="rl-row rl-justify-between rl-border rl-radius-m rl-gap-m rl-padding-m">
        <div>Left</div>
        <div>Right</div>
    </div>
</div>
```

### Complex bordered layouts

Borders combine with other modifiers to create complete UI components.

```preview
<div class="rl-column rl-border rl-radius-m">
    <div class="rl-padding-m">Header Section</div>
    <div class="rl-divider"></div>
    <div class="rl-padding-m">Content Area</div>
    <div class="rl-divider"></div>
    <div class="rl-row rl-justify-between rl-gap-m rl-padding-m">
        <div>Cancel</div>
        <div>Save</div>
    </div>
</div>
```

```preview
<div class="rl-column rl-gap-m">
    <div class="rl-row rl-border rl-radius-s rl-gap-m rl-padding-m">
        <div>Navigation</div>
        <div class="rl-width-fill">User Menu</div>
    </div>
    <div class="rl-grid rl-border rl-radius-s rl-gap-m rl-padding-l">
        <div>Dashboard 1</div>
        <div>Dashboard 2</div>
        <div>Dashboard 3</div>
        <div>Dashboard 4</div>
    </div>
</div>
```

### Cards and panels

Borders are essential for creating card-based layouts and panels.

```preview
<div class="rl-column rl-border rl-radius-l rl-gap-m rl-padding-l">
    <div class="rl-column rl-gap-s">
        <h3>Card Title</h3>
        <p>Card description goes here with relevant information.</p>
    </div>
    <div class="rl-row rl-gap-s">
        <div>Tag A</div>
        <div>Tag B</div>
        <div>Tag C</div>
    </div>
    <div class="rl-divider"></div>
    <div class="rl-row rl-justify-between rl-gap-m">
        <div>Details</div>
        <div>Action</div>
    </div>
</div>
```

```preview
<div class="rl-grid rl-gap-m">
    <div class="rl-column rl-border rl-radius-m rl-padding-m rl-gap-s">
        <div>Product 1</div>
        <div>$99.99</div>
    </div>
    <div class="rl-column rl-border rl-radius-m rl-padding-m rl-gap-s">
        <div>Product 2</div>
        <div>$149.99</div>
    </div>
    <div class="rl-column rl-border rl-radius-m rl-padding-m rl-gap-s">
        <div>Product 3</div>
        <div>$199.99</div>
    </div>
</div>
```

### Border with dividers

Borders and dividers work together to create well-structured layouts with clear sections.

```preview
<div class="rl-column rl-border rl-radius-m">
    <div class="rl-padding-m">Dashboard</div>
    <div class="rl-divider"></div>
    <div class="rl-padding-m">Projects</div>
    <div class="rl-divider"></div>
    <div class="rl-padding-m">Team</div>
    <div class="rl-divider"></div>
    <div class="rl-padding-m">Settings</div>
</div>
```

```preview
<div class="rl-row rl-border rl-radius-s rl-gap-m rl-padding-m">
    <div>Home</div>
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

### Usage notes

The border modifier adds visual boundaries to layout containers:

**What border controls:**
- Adds a border around the entire container
- Uses `--rl-border-default` CSS variable (default: `solid 1px hsl(0, 0%, 50%)`)
- Automatically applies `--rl-radius-default` for border-radius when used with radius modifiers
- Works identically across all layout types

**Border best practices:**
- Always combine borders with padding to prevent content from touching the border
- Use radius modifiers to create rounded corners
- Consider visual hierarchy when nesting bordered containers
- Borders add to the total size of the container (not included in width/height)
- Combine with dividers for internal separations

**Customizing borders globally:**
Override the `--rl-border-default` variable to change all borders:

```css
:root {
  --rl-border-default: solid 2px #e0e0e0;
}
```

For rounded borders by default, override `--rl-radius-default`:

```css
:root {
  --rl-radius-default: 0.5rem;
}
```

**When to use borders:**
- Creating cards and panels
- Defining sections and containers
- Navigation bars and toolbars
- Form groups and input containers
- Modal dialogs and overlays
- Separating distinct content areas

**Combining with other modifiers:**
- **Padding**: Essential for spacing content from the border
- **Radius**: Adds rounded corners to borders
- **Gap**: Controls spacing between items inside the bordered container
- **Width**: Constrains and centers bordered containers
- **Dividers**: Creates internal separations within bordered containers

**Technical details:**
- The `rl-border` class applies both `border` and `border-radius` properties
- Border uses CSS custom properties for easy global customization
- Border width and style affect the container's visual size (box model)
- Works with CSS `box-sizing: border-box` for predictable sizing
- Can be applied to any layout container or individual items
