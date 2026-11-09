import { SlotElement } from '../base/slot-element';
import { customElement } from 'lit/decorators.js';
import { _divCss } from '../layouts/_div.css';
import { _borderCss } from '../mods/_border.css';
import { _colorCss } from '../mods/_color.css';
import { _gradientCss } from '../mods/_gradient.css';
import { _heightCss } from '../mods/_height.css';
import { _paddingCss } from '../mods/_padding.css';
import { _radiusCss } from '../mods/_radius.css';
import { _scrollCss } from '../mods/_scroll.css';
import { _shadowCss } from '../mods/_shadow.css';
import { _widthCss } from '../mods/_width.css';

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
