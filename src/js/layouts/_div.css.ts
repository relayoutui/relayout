import { css } from 'lit';

// <rl-div>: no counterpart in src/scss, because a plain `div` is already a block, and the class form can go on any
// element. The element exists so the modifiers, which are styles of the host, have a plain box to apply to.
export const _divCss = css`
    :host {
        display: block;
        box-sizing: border-box;
    }
`;
