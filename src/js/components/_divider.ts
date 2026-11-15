import { SlotElement } from '../base/slot-element.js';
import { defineElement } from '../base/define-element.js';
import { _dividerCss } from '../layouts/_divider.css.js';
import { _hiddenCss } from '../mods/_hidden.css.js';

@defineElement('rl-divider')
export class Divider extends SlotElement

{
    static styles = [
        _dividerCss,
        _hiddenCss,
    ];
}

declare global {
    interface HTMLElementTagNameMap {
        'rl-divider': Divider;
    }
}