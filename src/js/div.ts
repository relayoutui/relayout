import { LitElement, TemplateResult, css, html } from 'lit';
import { defineElement } from './base/define-element.js';
import { classRules } from './generated/class-rules.js';

/**
 * `<rl-div>`: a `div` that takes the classes of relayout.css through `class`, for markup inside another component's
 * shadow root, where the page's relayout.css doesn't reach. `<rl-div class="rl-row rl-gap-m">` there is what
 * `<div class="rl-row rl-gap-m">` is in the page.
 *
 * Its rules are relayout.css's own, made at build by .github/scripts/element-rules.mjs: `.rl-gap-m` is
 * `:host(.rl-gap-m)`, and a layout's rule for its child, `.rl-row > .rl-width-fill`, is
 * `:host(.rl-row) ::slotted(.rl-width-fill)`. The sizes and colors are variables, which reach it from the page.
 */
@defineElement('rl-div')
class Div extends LitElement
{
    static styles = [
        // Its own: a block, as a div is, and hidden by `hidden`, which the block would beat. hidden="until-found" is left
        // to the browser, which hides it with content-visibility, so the page's find reaches it.
        css`
            :host { display: block; }
            :host([hidden]:not([hidden="until-found" i])) { display: none; }
        `,
        classRules,
    ];

    // Typed through 'lit', the one package the declarations then name: 'lit-html' is Lit's own dependency, which a
    // strict package manager doesn't let a project's types reach
    render(): TemplateResult
    {
        return html`<slot></slot>`;
    }
}

declare global
{
    interface HTMLElementTagNameMap
    {
        'rl-div': Div;
    }
}
