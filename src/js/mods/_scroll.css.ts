import { css } from 'lit';

// Keep in sync with: src/scss/partials/mods/_scroll.scss

// .rl-scroll; a plain child that scrolls is styled from its parent, in layouts/_column.css.ts and layouts/_row.css.ts
export const _scrollCss = css`
    :host([rl-scroll]) {
        overflow: auto;
    }
`;
