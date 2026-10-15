## Radius `(rl-radius-*)`

The radius modifier rounds the corners of bordered elements. Radius only has a visible effect when combined with the border modifier or when an element has a border or background applied through other means. The radius values use the same spacing scale as gap and padding.

Apply class `rl-radius-*` to a layout container or element with a border, where `*` can be `0`, `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

### Radius sizes

- **`rl-radius-0`** - No rounding (0) - square corners
- **`rl-radius-xs`** - Extra small radius (0.125rem / 2px)
- **`rl-radius-s`** - Small radius (0.25rem / 4px)
- **`rl-radius-m`** - Medium radius (0.5rem / 8px)
- **`rl-radius-l`** - Large radius (1rem / 16px)
- **`rl-radius-xl`** - Extra large radius (1.5rem / 24px)
- **`rl-radius-2xl`** - Double extra large radius (2.25rem / 36px)

### Radius with column

Radius on columns creates rounded corners for vertical containers, useful for cards, panels, and forms.

#### `rl-radius-s`

```preview
<div class="rl-column rl-border rl-radius-s rl-padding-m rl-gap-s">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

#### `rl-radius-m`

```preview
<div class="rl-column rl-border rl-radius-m rl-padding-m rl-gap-s">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

#### `rl-radius-l`

```preview
<div class="rl-column rl-border rl-radius-l rl-padding-m rl-gap-s">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

#### `rl-radius-xl`

```preview
<div class="rl-column rl-border rl-radius-xl rl-padding-l rl-gap-s">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

#### `rl-radius-2xl`

```preview
<div class="rl-column rl-border rl-radius-2xl rl-padding-l rl-gap-s">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

### Radius with row

Rounded corners on row layouts create softer, more approachable groups of tags or buttons.

```preview
<div class="rl-row rl-border rl-radius-s rl-gap-m rl-padding-m">
    <div>Tag 1</div>
    <div>Tag 2</div>
    <div>Tag 3</div>
    <div>Tag 4</div>
</div>
```

```preview
<div class="rl-row rl-border rl-radius-m rl-gap-m rl-padding-l">
    <div>Button A</div>
    <div>Button B</div>
    <div>Button C</div>
</div>
```

```preview
<div class="rl-row rl-border rl-radius-xl rl-gap-s rl-padding-l">
    <div>Badge 1</div>
    <div>Badge 2</div>
    <div>Badge 3</div>
    <div>Badge 4</div>
    <div>Badge 5</div>
</div>
```

### Radius with grid

Rounded corners on grids create softer container edges for card layouts and galleries.

```preview
<div class="rl-grid rl-border rl-radius-s rl-gap-m rl-padding-m">
    <div>Card 1</div>
    <div>Card 2</div>
    <div>Card 3</div>
    <div>Card 4</div>
</div>
```

```preview
<div class="rl-grid rl-grid-fit-m rl-border rl-radius-m rl-gap-m rl-padding-l">
    <div>Item A</div>
    <div>Item B</div>
    <div>Item C</div>
    <div>Item D</div>
    <div>Item E</div>
    <div>Item F</div>
</div>
```

```preview
<div class="rl-grid rl-border rl-radius-l rl-gap-l rl-padding-l">
    <div>Product 1</div>
    <div>Product 2</div>
    <div>Product 3</div>
    <div>Product 4</div>
</div>
```

### Radius with frame

Rounded corners on frames create polished presentation areas for centered content.

```preview
<div class="rl-frame rl-border rl-radius-m rl-padding-m" style="height: 10em;">
    <div>Centered Content</div>
</div>
```

```preview
<div class="rl-frame rl-border rl-radius-l rl-padding-l" style="height: 12em;">
    <div>
        <h3>Hero Section</h3>
        <p>With rounded corners</p>
    </div>
</div>
```

```preview
<div class="rl-frame rl-border rl-radius-xl rl-padding-xl" style="height: 15em;">
    <div>Large radius frame</div>
</div>
```

### Radius on individual items

Radius can be applied to individual items within containers for varied visual effects.

```preview
<div class="rl-column rl-gap-m">
    <div class="rl-border rl-radius-s rl-padding-m">Small radius item</div>
    <div class="rl-border rl-radius-m rl-padding-m">Medium radius item</div>
    <div class="rl-border rl-radius-l rl-padding-m">Large radius item</div>
</div>
```

```preview
<div class="rl-grid rl-gap-m">
    <div class="rl-border rl-radius-s rl-padding-m">Card A</div>
    <div class="rl-border rl-radius-m rl-padding-m">Card B</div>
    <div class="rl-border rl-radius-l rl-padding-m">Card C</div>
    <div class="rl-border rl-radius-xl rl-padding-m">Card D</div>
</div>
```

```preview
<div class="rl-row rl-gap-m">
    <div class="rl-border rl-radius-s rl-padding-s">Tag 1</div>
    <div class="rl-border rl-radius-s rl-padding-s">Tag 2</div>
    <div class="rl-border rl-radius-s rl-padding-s">Tag 3</div>
    <div class="rl-border rl-radius-s rl-padding-s">Tag 4</div>
</div>
```

### Radius size comparison

Visual comparison of all radius sizes on the same layout type:

```preview
<div class="rl-column rl-gap-m">
    <div class="rl-border rl-radius-0 rl-padding-m">
        No radius (0) - Square corners
    </div>
    <div class="rl-border rl-radius-xs rl-padding-m">
        Extra small (xs) - 0.125rem
    </div>
    <div class="rl-border rl-radius-s rl-padding-m">
        Small (s) - 0.25rem
    </div>
    <div class="rl-border rl-radius-m rl-padding-m">
        Medium (m) - 0.5rem
    </div>
    <div class="rl-border rl-radius-l rl-padding-m">
        Large (l) - 1rem
    </div>
    <div class="rl-border rl-radius-xl rl-padding-m">
        Extra large (xl) - 1.5rem
    </div>
    <div class="rl-border rl-radius-2xl rl-padding-m">
        Double extra large (2xl) - 2.25rem
    </div>
</div>
```

### Nested containers with varying radius

Different radius values at different nesting levels create visual hierarchy and depth.

```preview
<div class="rl-column rl-border rl-radius-l rl-gap-m rl-padding-l">
    <div>Outer container with large radius</div>
    <div class="rl-column rl-border rl-radius-s rl-gap-s rl-padding-m">
        <div>Nested container with small radius</div>
        <div>Creates visual hierarchy</div>
    </div>
</div>
```

```preview
<div class="rl-column rl-border rl-radius-xl rl-gap-l rl-padding-xl">
    <div class="rl-row rl-border rl-radius-m rl-gap-m rl-padding-m">
        <div>Tag A</div>
        <div>Tag B</div>
        <div>Tag C</div>
    </div>
    <div class="rl-row rl-justify-between rl-border rl-radius-m rl-gap-m rl-padding-m">
        <div>Left</div>
        <div>Right</div>
    </div>
</div>
```

### Complex layouts with radius

Radius combined with other modifiers creates polished UI components.

```preview
<div class="rl-column rl-border rl-radius-m">
    <div class="rl-padding-m">Header Section</div>
    <div class="rl-divider"></div>
    <div class="rl-column rl-gap-s rl-padding-m">
        <div>Content Line 1</div>
        <div>Content Line 2</div>
        <div>Content Line 3</div>
    </div>
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
        <div class="rl-width-fill">Actions</div>
    </div>
    <div class="rl-grid rl-border rl-radius-m rl-gap-m rl-padding-l">
        <div>Widget 1</div>
        <div>Widget 2</div>
        <div>Widget 3</div>
        <div>Widget 4</div>
    </div>
</div>
```

### Card layouts with radius

Radius is essential for creating modern card-based designs.

```preview
<div class="rl-grid rl-gap-m">
    <div class="rl-column rl-border rl-radius-m rl-padding-m rl-gap-s">
        <h3>Card Title 1</h3>
        <p>Card content goes here.</p>
        <div class="rl-row rl-gap-s">
            <div>Tag</div>
            <div>Label</div>
        </div>
    </div>
    <div class="rl-column rl-border rl-radius-m rl-padding-m rl-gap-s">
        <h3>Card Title 2</h3>
        <p>Card content goes here.</p>
        <div class="rl-row rl-gap-s">
            <div>Tag</div>
            <div>Label</div>
        </div>
    </div>
    <div class="rl-column rl-border rl-radius-m rl-padding-m rl-gap-s">
        <h3>Card Title 3</h3>
        <p>Card content goes here.</p>
        <div class="rl-row rl-gap-s">
            <div>Tag</div>
            <div>Label</div>
        </div>
    </div>
</div>
```

### Radius with different border radii

Combining varying radius values creates distinct visual styles.

```preview
<div class="rl-column rl-gap-m">
    <div class="rl-border rl-radius-s rl-padding-m">Subtle rounded corners</div>
    <div class="rl-border rl-radius-l rl-padding-m">Prominent rounded corners</div>
    <div class="rl-border rl-radius-2xl rl-padding-m">Very rounded corners</div>
</div>
```

```preview
<div class="rl-row rl-gap-m">
    <div class="rl-border rl-radius-s rl-padding-s">Tag</div>
    <div class="rl-border rl-radius-m rl-padding-s">Chip</div>
    <div class="rl-border rl-radius-xl rl-padding-s">Pill</div>
    <div class="rl-border rl-radius-2xl rl-padding-m">Button</div>
</div>
```

### Menu and navigation with radius

Rounded corners soften navigation components and menus.

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
<div class="rl-row rl-border rl-radius-l rl-gap-m rl-padding-m">
    <div>Logo</div>
    <div class="rl-row rl-gap-m rl-width-fill">
        <div>Home</div>
        <div>Products</div>
        <div>About</div>
        <div>Contact</div>
    </div>
</div>
```

### Panels and sections with radius

Rounded panels create distinct, organized sections in layouts.

```preview
<div class="rl-column rl-gap-l">
    <div class="rl-column rl-border rl-radius-m rl-padding-l rl-gap-m">
        <h3>Profile Information</h3>
        <div class="rl-column rl-gap-s">
            <div>Name: John Doe</div>
            <div>Email: john@example.com</div>
            <div>Role: Developer</div>
        </div>
    </div>
    <div class="rl-column rl-border rl-radius-m rl-padding-l rl-gap-m">
        <h3>Account Settings</h3>
        <div class="rl-column rl-gap-s">
            <div>Theme: Auto</div>
            <div>Language: English</div>
            <div>Notifications: On</div>
        </div>
    </div>
</div>
```

### Radius for different use cases

Different radius sizes for different component types:

```preview
<div class="rl-column rl-gap-m">
    <div class="rl-border rl-radius-s rl-padding-s">
        Small radius - Subtle, for compact UI elements
    </div>
    <div class="rl-border rl-radius-m rl-padding-m">
        Medium radius - Balanced, for standard cards and containers
    </div>
    <div class="rl-border rl-radius-l rl-padding-l">
        Large radius - Prominent, for hero sections and featured content
    </div>
    <div class="rl-border rl-radius-2xl rl-padding-xl">
        Extra large radius - Bold, for special emphasis or pill shapes
    </div>
</div>
```

### Usage notes

The border-radius modifier rounds the corners of bordered elements:

**What radius controls:**
- Rounds all four corners of an element equally
- Only visible when element has a border (via `rl-border` or custom CSS)
- Uses the same spacing scale as gap and padding modifiers
- Applied via CSS `border-radius` property

**Radius requirements:**
- **Must be combined with borders** - Radius has no visible effect without a border
- The `rl-border` class automatically applies `--rl-radius-default` if set
- Radius can be applied to containers or individual items
- Works identically across all layout types

**Choosing radius sizes:**
- **xs/s (0.125-0.25rem)**: Subtle rounding for compact UI, minimal styling
- **m (0.5rem)**: Balanced, general-purpose rounding for most components
- **l (1rem)**: Prominent rounding for cards, panels, featured content
- **xl/2xl (1.5-2.25rem)**: Bold rounding for emphasis, pill shapes, hero sections

**Default radius:**
By default, `--rl-radius-default` is set to `0` (square corners). Override it globally:

```css
:root {
  --rl-radius-default: var(--rl-space-m); /* 0.5rem */
}
```

When `--rl-radius-default` is set, all `rl-border` classes automatically apply that radius.

**Best practices:**
- Use consistent radius values across similar component types
- Larger elements can handle larger radius values
- Smaller elements work better with smaller radius values
- Very large radius (xl/2xl) creates pill or stadium shapes
- Match radius size to the overall design language (subtle vs. bold)
- Consider accessibility - ensure sufficient contrast at rounded corners

**Common patterns:**
- **Cards**: `rl-radius-m` or `rl-radius-l` for standard cards
- **Buttons**: `rl-radius-s` for subtle, `rl-radius-xl` for pill buttons
- **Tags/Chips**: `rl-radius-s` for subtle, `rl-radius-l` for prominent
- **Modals/Panels**: `rl-radius-l` or `rl-radius-xl` for emphasis
- **Navigation**: `rl-radius-s` or `rl-radius-m` for headers/menus
- **Subtle UI**: `rl-radius-xs` or `rl-radius-s` for minimal styling

**Visual hierarchy with radius:**
- Use different radius sizes to create depth and hierarchy
- Larger outer containers with larger radius
- Smaller nested elements with smaller or no radius
- Consistent radius across elements of the same type

**Technical details:**
- Radius uses CSS custom properties: `--rl-space-*`
- Applied equally to all four corners
- Does not affect layout or spacing calculations
- Works with CSS `box-sizing: border-box` for predictable sizing
- Can be overridden with custom CSS for specific corners if needed
