import { css } from 'lit';

// Keep in sync with: src/scss/partials/mods/_wrapping.scss

// .rl-nowrap-*, .rl-wrap-reverse
export const _wrappingCss = css`
    :host([rl-nowrap]) {
        flex-wrap: nowrap;
    }

    :host([rl-nowrap-scroll]) {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
    }

    :host([rl-nowrap-scroll]) > ::slotted(*) {
        flex: 0 0 auto;
    }

    :host([rl-wrap-reverse]) {
        flex-wrap: wrap-reverse;
    }
`;