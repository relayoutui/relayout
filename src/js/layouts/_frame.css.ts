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
        /* A page's own padding on the element beats a :host rule, and :host([rl-padding-*]) has a higher weight than
           :host, as in the class form, where the default is in a cascade layer. Until a page sets the variable the
           element keeps its own padding (revert) */
        padding: var(--rl-padding-default, revert);
    }

    /* the children stay inside the frame */
    :host > ::slotted(*) {
        max-width: 100%;
        max-height: 100%;
    }

    /* A child that should scroll takes rl-scroll, as in every other layout, and a slotted child can only be styled from
       here. It is border-box, as the class form gets it from src/scss/partials/base/_base.scss. The class form of the
       child scrolls through its own global rule. */
    ::slotted([rl-scroll]) { box-sizing: border-box; overflow: auto; }

    /* An image with hidden: the display: block below would beat the browser's display: none for hidden (see mods/_hidden.css.ts).
       hidden="until-found" is left to the browser. */
    :host > ::slotted(img[hidden]:not([hidden="until-found" i])) { display: none; }

    :host > ::slotted(img) {
        display: block;
        width: auto;
        height: auto;
        object-fit: contain;
    }
`;