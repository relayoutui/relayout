import { css } from 'lit';

// Keep in sync with: src/scss/partials/layouts/_frame.scss

// .rl-frame
export const _frameCss = css`
    :host {
        display: flex;
        /* border-box, as the class form gets it from src/scss/partials/base/_base.scss */
        box-sizing: border-box;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 100%;
        overflow: visible;
    }

    :host > ::slotted(*) {
        max-width: 100%;
        max-height: 100%;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    }

    :host > ::slotted(img) {
        display: block;
        width: auto;
        height: auto;
        object-fit: contain;
    }
`;