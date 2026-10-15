import { css } from 'lit';

// Keep in sync with: src/scss/partials/layouts/_row.scss

// .rl-row
export const _rowCss = css`
    :host {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        flex-wrap: wrap;
        gap: var(--rl-gap-default);
    }

    /* Fill and scroll, set on the child; a slotted child can only be styled from here */
    ::slotted([rl-width-fill]) { flex: 999 1 0; }
    ::slotted([rl-height-fill]) { align-self: stretch; height: auto; }
    :host([rl-nowrap]) > ::slotted([rl-width-fill]) { min-width: 0; }
    ::slotted([rl-scroll]) { overflow: auto; }
`;
