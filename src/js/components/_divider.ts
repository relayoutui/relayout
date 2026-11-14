import { SlotElement } from '../base/slot-element.js';
import { customElement } from 'lit/decorators.js';
import { _dividerCss } from '../layouts/_divider.css.js';

@customElement('rl-divider')
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