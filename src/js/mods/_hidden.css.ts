import { css } from 'lit';

// Keep in sync with: src/scss/partials/mods/_hidden.scss

// [hidden]
// An element's `display` beats the browser's `display: none` for `hidden`, so each element that sets one gives it
// back to `hidden`, except `hidden="until-found"`, which the browser hides with `content-visibility`.
export const _hiddenCss = css`
    :host([hidden]:not([hidden="until-found" i])) { display: none; }
`;
