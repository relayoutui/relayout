import { css } from 'lit';

// Keep in sync with: src/scss/partials/layouts/_grid.scss

// .rl-grid
// A cell's minimum is capped at the grid's width, min(…, 100%), so in a grid narrower than one cell the single column
// shrinks to fit instead of overflowing.
export const _gridCss = css`
    :host {
        display: grid;
        /* border-box, as the class form gets it from src/scss/partials/base/_base.scss */
        box-sizing: border-box;
        grid-template-columns: repeat(auto-fit, minmax(min(var(--rl-grid-s), 100%), 1fr));
        gap: var(--rl-gap-default);
        /* A page's own padding on the element beats a :host rule, and :host([rl-padding-*]) has a higher weight than
           :host, as in the class form, where the default is in a cascade layer. Until a page sets the variable the
           element keeps its own padding (revert) */
        padding: var(--rl-padding-default, revert);
    }

    /* A child that scrolls takes rl-scroll as in every other layout, and a slotted child can only be styled from here. It is
       border-box, as the class form gets it from src/scss/partials/base/_base.scss. The class form of the child scrolls
       through its own global rule. */
    ::slotted([rl-scroll]) { box-sizing: border-box; overflow: auto; }

    /* fit */
    :host([rl-grid-fit-xs]) { grid-template-columns: repeat(auto-fit, minmax(min(var(--rl-grid-xs), 100%), 1fr)); }
    :host([rl-grid-fit-s]) { grid-template-columns: repeat(auto-fit, minmax(min(var(--rl-grid-s), 100%), 1fr)); }
    :host([rl-grid-fit-m]) { grid-template-columns: repeat(auto-fit, minmax(min(var(--rl-grid-m), 100%), 1fr)); }
    :host([rl-grid-fit-l]) { grid-template-columns: repeat(auto-fit, minmax(min(var(--rl-grid-l), 100%), 1fr)); }
    :host([rl-grid-fit-xl]) { grid-template-columns: repeat(auto-fit, minmax(min(var(--rl-grid-xl), 100%), 1fr)); }
    :host([rl-grid-fit-2xl]) { grid-template-columns: repeat(auto-fit, minmax(min(var(--rl-grid-2xl), 100%), 1fr)); }

    /* fill */
    :host([rl-grid-fill-xs]) { grid-template-columns: repeat(auto-fill, minmax(min(var(--rl-grid-xs), 100%), 1fr)); }
    :host([rl-grid-fill-s]) { grid-template-columns: repeat(auto-fill, minmax(min(var(--rl-grid-s), 100%), 1fr)); }
    :host([rl-grid-fill-m]) { grid-template-columns: repeat(auto-fill, minmax(min(var(--rl-grid-m), 100%), 1fr)); }
    :host([rl-grid-fill-l]) { grid-template-columns: repeat(auto-fill, minmax(min(var(--rl-grid-l), 100%), 1fr)); }
    :host([rl-grid-fill-xl]) { grid-template-columns: repeat(auto-fill, minmax(min(var(--rl-grid-xl), 100%), 1fr)); }
    :host([rl-grid-fill-2xl]) { grid-template-columns: repeat(auto-fill, minmax(min(var(--rl-grid-2xl), 100%), 1fr)); }
`;
