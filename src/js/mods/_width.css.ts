import { css } from 'lit';

// Keep in sync with: src/scss/partials/mods/_width.scss

// .rl-width-*, .rl-center-self
export const _widthCss = css`
    :host([rl-width-xs]) { max-width: var(--rl-width-xs); width: 100%; }
    :host([rl-width-s]) { max-width: var(--rl-width-s); width: 100%; }
    :host([rl-width-m]) { max-width: var(--rl-width-m); width: 100%; }
    :host([rl-width-l]) { max-width: var(--rl-width-l); width: 100%; }
    :host([rl-width-xl]) { max-width: var(--rl-width-xl); width: 100%; }
    :host([rl-width-2xl]) { max-width: var(--rl-width-2xl); width: 100%; }

    :host([rl-center-self]) { margin-inline: auto; }
`;
