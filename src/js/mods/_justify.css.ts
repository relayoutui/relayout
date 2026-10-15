import { css } from 'lit';

// Keep in sync with: src/scss/partials/mods/_justify.scss

// .rl-justify-*
export const _justifyCss = css`
    :host([rl-justify-start]) { justify-content: start; }
    :host([rl-justify-center]) { justify-content: center; }
    :host([rl-justify-end]) { justify-content: end; }
    :host([rl-justify-between]) { justify-content: space-between; }
`;