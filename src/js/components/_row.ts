import { SlotElement } from '../base/slot-element.js';
import { customElement } from 'lit/decorators.js';
import { _rowCss } from '../layouts/_row.css.js';
import { _alignCss } from '../mods/_align.css.js';
import { _borderCss } from '../mods/_border.css.js';
import { _colorCss } from '../mods/_color.css.js';
import { _gapCss } from '../mods/_gap.css.js';
import { _gradientCss } from '../mods/_gradient.css.js';
import { _heightCss } from '../mods/_height.css.js';
import { _justifyCss } from '../mods/_justify.css.js';
import { _paddingCss } from '../mods/_padding.css.js';
import { _radiusCss } from '../mods/_radius.css.js';
import { _scrollCss } from '../mods/_scroll.css.js';
import { _shadowCss } from '../mods/_shadow.css.js';
import { _widthCss } from '../mods/_width.css.js';
import { _wrappingCss } from '../mods/_wrapping.css.js';

@customElement('rl-row')
export class Row extends SlotElement 
{
    static styles = [
        _rowCss,
        // applicable mods
        _alignCss,
        _borderCss,
        _colorCss,
        _gapCss,
        _gradientCss,
        _heightCss,
        _justifyCss,
        _paddingCss,
        _radiusCss,
        _scrollCss,
        _shadowCss,
        _widthCss,
        _wrappingCss,
    ];
}

declare global {
    interface HTMLElementTagNameMap {
        'rl-row': Row;
    }
}