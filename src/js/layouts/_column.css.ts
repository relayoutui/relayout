import { css } from 'lit';

// Keep in sync with: src/scss/partials/layouts/_column.scss

// .rl-column
export const _columnCss = css`
    :host {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: start;
        gap: var(--rl-gap-default);
    }

    /* Column specific text alignment */
    :host([rl-align-start]) { text-align: start; }
    :host([rl-align-center]) { text-align: center; }
    :host([rl-align-end]) { text-align: end; }

    /* Fill and scroll, set on the child; a slotted child can only be styled from here */
    ::slotted(*) { flex-shrink: 0; }
    ::slotted([rl-height-fill]) { flex: 999 1 auto; min-height: 0; }
    ::slotted([rl-width-fill]) { align-self: stretch; width: auto; }
    ::slotted([rl-scroll]) { overflow: auto; }
`;
