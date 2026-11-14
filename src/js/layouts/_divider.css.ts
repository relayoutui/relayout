import { css } from 'lit';

// Keep in sync with: src/scss/partials/layouts/_divider.scss

// .rl-divider
// A horizontal line. A divider that is a direct child of a row is a vertical one: that rule is `::slotted(rl-divider)`
// in layouts/_row.css.ts, where the fill rules are.
export const _dividerCss = css`
    :host {
        /* a block, as the div the class form goes on: an element's default is inline, which has no width or height */
        display: block;
        /* border-box, as the class form gets it from src/scss/partials/base/_base.scss */
        box-sizing: border-box;
        align-self: stretch;
        border: none;
        margin: 0;
        
        /* horizontal */
        width: 100%;
        height: 0;
        border-top: var(--rl-border-default);
    }
`;