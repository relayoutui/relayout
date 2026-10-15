import { SlotElement } from '../base/slot-element';
import { customElement } from 'lit/decorators.js';
import { _columnCss } from '../layouts/_column.css';
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

@customElement('rl-column')
export class Column extends SlotElement 
{
    static styles = [
        _columnCss,
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
    ];
}

declare global {
    interface HTMLElementTagNameMap {
        'rl-column': Column;
    }
}