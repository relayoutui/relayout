import { SlotElement } from '../base/slot-element.js';
import { customElement } from 'lit/decorators.js';
import { _divCss } from '../layouts/_div.css.js';
import { _borderCss } from '../mods/_border.css.js';
import { _colorCss } from '../mods/_color.css.js';
import { _gradientCss } from '../mods/_gradient.css.js';
import { _heightCss } from '../mods/_height.css.js';
import { _paddingCss } from '../mods/_padding.css.js';
import { _radiusCss } from '../mods/_radius.css.js';
import { _scrollCss } from '../mods/_scroll.css.js';
import { _shadowCss } from '../mods/_shadow.css.js';
import { _widthCss } from '../mods/_width.css.js';

@customElement('rl-div')
export class Div extends SlotElement
{
    static styles = [
        _divCss,
        // applicable mods: the ones that describe a box. Gap, align, justify and wrapping describe how a layout
        // arranges its children, and a plain box has no layout.
        _borderCss,
        _colorCss,
        _gradientCss,
        _heightCss,
        _paddingCss,
        _radiusCss,
        _scrollCss,
        _shadowCss,
        _widthCss,
    ];
}

declare global {
    interface HTMLElementTagNameMap {
        'rl-div': Div;
    }
}
