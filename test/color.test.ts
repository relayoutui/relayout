import { describe, expect, it } from 'vitest';
import '../dist/css/relayout.css';
import '../dist/js/relayout.js';

// Muted is a color, `rl-color-muted`, from `--rl-color-muted`, as a class and as an attribute of the elements. The
// names it had before, `rl-color-text-muted` and `--rl-color-text-muted`, and the half opacity `rl-text-muted`, are
// gone: they do nothing.

const INHERITED = 'rgb(1, 2, 3)';
const dark = matchMedia('(prefers-color-scheme: dark)').matches;
// hsl(0, 0%, 65%) in the dark theme, hsl(0, 0%, 45%) in the light one
const MUTED = dark ? 'rgb(166, 166, 166)' : 'rgb(115, 115, 115)';

/** An element or a div with the class, in a parent whose color is not the page's, so a rule that does nothing shows. */
function place(form: 'class' | 'element', name: string): { stage: HTMLElement; target: HTMLElement }
{
    const stage = document.createElement('div');
    stage.style.color = INHERITED;
    const target = document.createElement(form === 'element' ? 'rl-div' : 'div');
    if (form === 'element') target.setAttribute(name, '');
    else target.classList.add(name);
    target.textContent = 'Text';
    stage.append(target);
    document.body.append(stage);
    return { stage, target };
}

function colorOf(form: 'class' | 'element', name: string): string
{
    const { stage, target } = place(form, name);
    try
    {
        return getComputedStyle(target).color;
    }
    finally
    {
        stage.remove();
    }
}

/** Red, green and blue of a computed `rgb(...)` color. */
function channels(color: string): number[]
{
    return (color.match(/[\d.]+/g) ?? []).slice(0, 3).map(Number);
}

/** WCAG relative luminance */
function luminance(color: string): number
{
    const [red, green, blue] = channels(color).map(value =>
    {
        const unit = value / 255;
        return unit <= 0.04045 ? unit / 12.92 : ((unit + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}

function contrast(first: string, second: string): number
{
    const [lighter, darker] = [luminance(first), luminance(second)].sort((a, b) => b - a);
    return (lighter + 0.05) / (darker + 0.05);
}

/** The value of a variable the stylesheet sets on `:root`, for the theme the browser is in or the dark one. */
function rootVariable(name: string, inDarkScheme: boolean): string | undefined
{
    const values: string[] = [];
    const visit = (rules: CSSRuleList, inDark: boolean): void =>
    {
        for (const rule of rules)
        {
            if (rule instanceof CSSMediaRule)
            {
                visit(rule.cssRules, rule.conditionText.includes('prefers-color-scheme: dark'));
            }
            else if (rule instanceof CSSStyleRule && rule.selectorText === ':root' && inDark === inDarkScheme)
            {
                const value = rule.style.getPropertyValue(name).trim();
                if (value) values.push(value.replace(/\s+/g, ''));
            }
        }
    };
    for (const sheet of document.styleSheets) visit(sheet.cssRules, false);
    return values.at(-1);
}

describe('rl-color-muted', () =>
{
    it.each(['class', 'element'] as const)('sets the muted color as a %s', form =>
    {
        expect(colorOf(form, 'rl-color-muted')).toBe(MUTED);
    });

    it('is a color token whose light and dark values are unchanged', () =>
    {
        expect(rootVariable('--rl-color-muted', false)).toBe('hsl(0,0%,45%)');
        expect(rootVariable('--rl-color-muted', true)).toBe('hsl(0,0%,65%)');
    });

    it('is readable on the surface in the theme the browser is in', () =>
    {
        const probe = document.createElement('div');
        probe.style.cssText = 'color: var(--rl-color-muted); background: var(--rl-color-surface);';
        document.body.append(probe);
        try
        {
            const style = getComputedStyle(probe);
            expect(contrast(style.color, style.backgroundColor)).toBeGreaterThanOrEqual(4.5);
        }
        finally
        {
            probe.remove();
        }
    });
});

describe('the names muted had before', () =>
{
    it.each(['class', 'element'] as const)('rl-color-text-muted does nothing as a %s', form =>
    {
        expect(colorOf(form, 'rl-color-text-muted')).toBe(INHERITED);
    });

    it('rl-text-muted does not change the opacity', () =>
    {
        const { stage, target } = place('class', 'rl-text-muted');
        try
        {
            expect(getComputedStyle(target).opacity).toBe('1');
        }
        finally
        {
            stage.remove();
        }
    });

    it('--rl-color-text-muted is not set, in either theme', () =>
    {
        expect(rootVariable('--rl-color-text-muted', false)).toBeUndefined();
        expect(rootVariable('--rl-color-text-muted', true)).toBeUndefined();
    });
});
