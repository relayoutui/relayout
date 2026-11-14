import { css } from 'lit';

// Keep in sync with: src/scss/partials/layouts/_row.scss

// .rl-row
export const _rowCss = css`
    :host {
        display: flex;
        /* border-box, as the class form gets it from src/scss/partials/base/_base.scss */
        box-sizing: border-box;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        flex-wrap: wrap;
        gap: var(--rl-gap-default);
    }

    /* Fill and scroll, set on the child; a slotted child can only be styled from here.
       A child with one of these is border-box, as the class form gets it from src/scss/partials/base/_base.scss. */
    ::slotted([rl-width-fill]) { box-sizing: border-box; flex: 999 1 0; }
    ::slotted([rl-height-fill]) { box-sizing: border-box; align-self: stretch; height: auto; }
    :host([rl-nowrap]) > ::slotted([rl-width-fill]) { min-width: 0; }

    /* A divider is a vertical line in a row, see the note in src/scss/partials/layouts/_row.scss. A slotted child can only
       be styled from here, and this beats the divider's own :host rule. */
    ::slotted(rl-divider) {
        width: 0;
        height: auto;
        min-height: 100%;
        border-top: none;
        border-left: var(--rl-border-default);
    }
    ::slotted([rl-scroll]) { box-sizing: border-box; overflow: auto; }
`;
