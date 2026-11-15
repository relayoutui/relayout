import { css } from 'lit';

// Keep in sync with: src/scss/partials/layouts/_column.scss

// .rl-column
export const _columnCss = css`
    :host {
        display: flex;
        /* border-box, as the class form gets it from src/scss/partials/base/_base.scss */
        box-sizing: border-box;
        flex-direction: column;
        align-items: stretch;
        justify-content: start;
        gap: var(--rl-gap-default);
        /* A page's own padding on the element beats a :host rule, and :host([rl-padding-*]) has a higher weight than
           :host, as in the class form, where the default is in :where(). Until a page sets the variable the
           element keeps its own padding (revert) */
        padding: var(--rl-padding-default, revert);
    }

    /* Column specific text alignment */
    :host([rl-align-start]) { text-align: start; }
    :host([rl-align-center]) { text-align: center; }
    :host([rl-align-end]) { text-align: end; }

    /* Fill and scroll, set on the child, written for both forms of the child, the attribute and the class, so a child
       of either form works in a column of either form; a slotted child can only be styled from here.
       A child with one of these is border-box, as the class form gets it from src/scss/partials/base/_base.scss. */
    ::slotted(*) { flex-shrink: 0; }
    ::slotted([rl-height-fill]),
    ::slotted(.rl-height-fill) { box-sizing: border-box; flex: 999 1 auto; min-height: 0; }
    ::slotted([rl-width-fill]),
    ::slotted(.rl-width-fill) { box-sizing: border-box; align-self: stretch; width: auto; }
    ::slotted([rl-scroll]) { box-sizing: border-box; overflow: auto; }
`;
