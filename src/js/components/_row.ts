import { SlotElement } from '../base/slot-element';
import { customElement } from 'lit/decorators.js';
import { _rowCss } from '../layouts/_row.css';
import { _alignCss } from '../mods/_align.css';
import { _borderCss } from '../mods/_border.css';
import { _colorCss } from '../mods/_color.css';
import { _gapCss } from '../mods/_gap.css';
import { _gradientCss } from '../mods/_gradient.css';
import { _heightCss } from '../mods/_height.css';
import { _justifyCss } from '../mods/_justify.css';
import { _paddingCss } from '../mods/_padding.css';
import { _radiusCss } from '../mods/_radius.css';
import { _scrollCss } from '../mods/_scroll.css';
import { _shadowCss } from '../mods/_shadow.css';
import { _widthCss } from '../mods/_width.css';
import { _wrappingCss } from '../mods/_wrapping.css';

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