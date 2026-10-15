import { css } from 'lit';

// Keep in sync with: src/scss/partials/mods/_height.scss

// .rl-height-full; rl-height-fill depends on the parent, so its rules are in layouts/_column.css.ts and layouts/_row.css.ts
export const _heightCss = css`
    :host([rl-height-full]) {
        height: 100%;
    }
`;
