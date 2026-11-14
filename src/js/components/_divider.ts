import { SlotElement } from '../base/slot-element.js';
import { defineElement } from '../base/define-element.js';
import { _dividerCss } from '../layouts/_divider.css.js';

@defineElement('rl-divider')
export class Divider extends SlotElement

{
    static styles = [
        _dividerCss,
    ];
}

declare global {
    interface HTMLElementTagNameMap {
        'rl-divider': Divider;
    }
}