## Frame `(rl-frame)`

The frame centers content both horizontally and vertically within a container that fills 100% of its parent's width and height. Content inside the frame is automatically constrained to fit within the available space, with scrolling enabled if needed.

Frames are well suited for image displays, hero sections, modal content, media viewers, and any situation where you need to center and constrain content within a defined area.

#### `rl-frame`

By default, the frame centers its content and constrains it to fit within the frame boundaries.

```preview|debug
<div class="rl-frame" style="height: 15em; border: 1px solid #ccc;">
    <div>Centered content</div>
</div>
```

The frame automatically handles images by maintaining their aspect ratio and fitting them within the available space.

```preview
<div class="rl-frame" style="height: 15em; border: 1px solid #ccc;">
    <img src="https://picsum.photos/400/300" alt="Sample image" />
</div>
```

### Gap between elements

When the frame contains multiple items, you can add spacing between them.

Apply class `rl-gap-*` to the frame container, where `*` can be `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

#### `rl-gap-l`

```preview|debug
<div class="rl-frame rl-gap-l" style="height: 15em; border: 1px solid #ccc;">
    <div>Item 1</div>
    <div>Item 2</div>
</div>
```

### Aligning elements

Aligning elements refers to positioning elements along the cross axis.

In the frame layout, the default alignment is center, which positions content in the vertical center.

Apply class `rl-align-*` to the frame container, where `*` can be `start`, `center`, `end`, or `stretch`.

#### `rl-align-start`

```preview|debug
<div class="rl-frame rl-align-start" style="height: 15em; border: 1px solid #ccc;">
    <div>Content at top</div>
</div>
```

#### `rl-align-center` (default)

```preview|debug
<div class="rl-frame rl-align-center" style="height: 15em; border: 1px solid #ccc;">
    <div>Content centered vertically</div>
</div>
```

#### `rl-align-end`

```preview|debug
<div class="rl-frame rl-align-end" style="height: 15em; border: 1px solid #ccc;">
    <div>Content at bottom</div>
</div>
```

#### `rl-align-stretch`

```preview|debug
<div class="rl-frame rl-align-stretch" style="height: 15em; border: 1px solid #ccc;">
    <div>Content stretched vertically</div>
</div>
```

### Justifying elements

Justifying elements refers to positioning elements along the main axis.

In the frame layout, the default justification is space-around, which centers content horizontally.

Apply class `rl-justify-*` to the frame container, where `*` can be `start`, `center`, or `end`.

#### `rl-justify-start`

```preview|debug
<div class="rl-frame rl-justify-start" style="height: 15em; border: 1px solid #ccc;">
    <div>Content at left</div>
</div>
```

#### `rl-justify-center`

```preview|debug
<div class="rl-frame rl-justify-center" style="height: 15em; border: 1px solid #ccc;">
    <div>Content centered horizontally</div>
</div>
```

#### `rl-justify-end`

```preview|debug
<div class="rl-frame rl-justify-end" style="height: 15em; border: 1px solid #ccc;">
    <div>Content at right</div>
</div>
```

### Padding around container

By default, there is no padding around the frame container. The default padding is configurable by overriding variable `--rl-padding-default`.

Apply class `rl-padding-*` to the frame container, where `*` can be `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

#### `rl-padding-l`

```preview|debug
<div class="rl-frame rl-padding-l" style="height: 15em; border: 1px solid #ccc;">
    <div>Content with padding around frame</div>
</div>
```

### Border around container

By default, there is no border around the frame container.

Apply class `rl-border` to the frame container.

#### `rl-border`

```preview
<div class="rl-frame rl-border rl-padding-l" style="height: 15em;">
    <div>Content with border</div>
</div>
```

### Border radius

By default, the border does not have rounded corners. The default radius is configurable by overriding variable `--rl-radius-default`, which will apply only if a border is applied to the container.

Apply class `rl-radius-*` to the frame container, where `*` can be `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

#### `rl-radius-m`

```preview
<div class="rl-frame rl-border rl-radius-m rl-padding-l" style="height: 15em;">
    <div>Content with rounded corners</div>
</div>
```

```preview
<div class="rl-frame rl-border rl-radius-l rl-padding-l" style="height: 15em;">
    <img src="https://picsum.photos/300/200" alt="Image with rounded frame" />
</div>
```

### Nested frames

Frames can be nested to create complex centered layouts or to constrain content at different levels.

```preview
<div class="rl-frame rl-border rl-padding-m" style="height: 20em;">
    <div class="rl-frame rl-border rl-radius-m" style="width: 80%; height: 80%;">
        <div>Nested centered content</div>
    </div>
</div>
```

### Usage notes

The frame layout is designed to fill 100% of its parent container's width and height by default. To use frames effectively:

- Ensure the parent container has a defined height (frames need a height context to center content vertically)
- Content inside frames is automatically constrained with `max-width: 100%` and `max-height: 100%`
- Overflowing content will scroll automatically
- Images are handled specially to maintain aspect ratio with `object-fit: contain`

```preview
<div class="rl-column rl-gap-m">
    <div class="rl-frame rl-border rl-radius-m rl-padding-m" style="height: 12em;">
        <div>
            <h3>Hero Content</h3>
            <p>Perfectly centered in the frame</p>
        </div>
    </div>
    <div class="rl-frame rl-border rl-radius-m" style="height: 12em;">
        <img src="https://picsum.photos/500/300" alt="Responsive image" />
    </div>
</div>
```
