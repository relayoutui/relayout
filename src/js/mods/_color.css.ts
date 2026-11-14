import { css } from 'lit';

// Keep in sync with: src/scss/partials/mods/_color.scss

// .rl-bg-* / .rl-color-*
export const _colorCss = css`
    :host([rl-bg-primary])     { background-color: var(--rl-color-primary); }
    :host([rl-bg-secondary])   { background-color: var(--rl-color-secondary); }
    :host([rl-bg-accent])      { background-color: var(--rl-color-accent); }
    :host([rl-bg-success])     { background-color: var(--rl-color-success); }
    :host([rl-bg-warning])     { background-color: var(--rl-color-warning); }
    :host([rl-bg-danger])      { background-color: var(--rl-color-danger); }
    :host([rl-bg-info])        { background-color: var(--rl-color-info); }
    :host([rl-bg-surface])     { background-color: var(--rl-color-surface); }
    :host([rl-bg-surface-alt]) { background-color: var(--rl-color-surface-alt); }

    :host([rl-color-primary])   { color: var(--rl-color-primary); }
    :host([rl-color-secondary]) { color: var(--rl-color-secondary); }
    :host([rl-color-accent])    { color: var(--rl-color-accent); }
    :host([rl-color-success])   { color: var(--rl-color-success); }
    :host([rl-color-warning])   { color: var(--rl-color-warning); }
    :host([rl-color-danger])    { color: var(--rl-color-danger); }
    :host([rl-color-info])      { color: var(--rl-color-info); }
    :host([rl-color-text])      { color: var(--rl-color-text); }
    :host([rl-color-muted])     { color: var(--rl-color-muted); }
`;
