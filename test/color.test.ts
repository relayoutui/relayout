import { describe, expect, it } from 'vitest';
import '../dist/css/relayout.css';
import '../dist/js/relayout.js';
import { FORMS, boxOf, mount, type Form } from './stage.js';

// The palette: nine roles, each a variable with a light and a dark value, defined with light-dark(). The dark value
// applies where the element that uses the role has a dark color-scheme. relayout.css declares none, so a page that sets
// none stays light, and `color-scheme: dark` on an element turns the roles inside it dark. A browser without
// light-dark() keeps the light values, which come first. primary is the text color, and a colored fill sets the text to
// surface. secondary, text and the gradients are gone, and so are the names muted had before 0.6.0.

const INHERITED = 'rgb(1, 2, 3)';

/** Each role, with its light and dark value. */
const ROLES: [string, string, string][] = [
    ['primary', 'hsl(0, 0%, 10%)', 'hsl(0, 0%, 95%)'],
    ['muted', 'hsl(0, 0%, 45%)', 'hsl(0, 0%, 65%)'],
    ['accent', 'hsl(30, 90%, 50%)', 'hsl(30, 90%, 60%)'],
    ['success', 'hsl(142, 60%, 35%)', 'hsl(142, 60%, 50%)'],
    ['warning', 'hsl(38, 95%, 45%)', 'hsl(38, 95%, 60%)'],
    ['danger', 'hsl(0, 70%, 50%)', 'hsl(0, 75%, 65%)'],
    ['info', 'hsl(200, 75%, 45%)', 'hsl(200, 80%, 60%)'],
    ['surface', 'hsl(0, 0%, 100%)', 'hsl(0, 0%, 12%)'],
    ['surface-alt', 'hsl(0, 0%, 96%)', 'hsl(0, 0%, 18%)'],
];

/** The roles a fill sets the text of: every role but the surfaces and muted, which has no fill. */
const FILLS = ['primary', 'accent', 'success', 'warning', 'danger', 'info'];

type Scheme = 'light' | 'dark';

/** A color as the browser computes it, for comparing with a computed color whatever the browser's rounding. */
function computed(color: string): string
{
    const probe = document.createElement('div');
    probe.style.color = color;
    document.body.append(probe);
    try
    {
        return getComputedStyle(probe).color;
    }
    finally
    {
        probe.remove();
    }
}

/** A role's value in the scheme. */
function roleValue(role: string, scheme: Scheme): string
{
    const [, light, dark] = ROLES.find(([name]) => name === role)!;
    return computed(scheme === 'light' ? light : dark);
}

/**
 * The color and background of a box with the classes, in a parent of the color-scheme whose color is not the page's,
 * so a rule that does nothing shows.
 */
async function colorsOf(form: Form, classes: string, scheme?: Scheme): Promise<{ color: string; background: string }>
{
    const parentStyle = `color: ${INHERITED};${scheme ? ` color-scheme: ${scheme};` : ''}`;
    const { target, remove } = await mount(`<div style="${parentStyle}">${boxOf(form, classes, 'data-target', 'Text')}</div>`, { form });
    try
    {
        const style = getComputedStyle(target);
        return { color: style.color, background: style.backgroundColor };
    }
    finally
    {
        remove();
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

/** The values the style sheet sets on `:root` for a variable, in order: outside any at-rule, and inside one. */
function rootValues(name: string): { plain: string[]; inAtRule: string[] }
{
    const found = { plain: [] as string[], inAtRule: [] as string[] };
    const visit = (rules: CSSRuleList, inAtRule: boolean): void =>
    {
        for (const rule of rules)
        {
            if (rule instanceof CSSStyleRule && rule.selectorText === ':root')
            {
                const value = rule.style.getPropertyValue(name).trim();
                if (value) (inAtRule ? found.inAtRule : found.plain).push(value.replace(/\s+/g, ''));
            }
            else if ('cssRules' in rule)
            {
                visit((rule as CSSGroupingRule).cssRules, true);
            }
        }
    };
    for (const sheet of document.styleSheets) visit(sheet.cssRules, false);
    return found;
}

/** Every `--rl-color-*` variable the style sheet sets on `:root`. */
function colorVariables(): string[]
{
    const names = new Set<string>();
    const visit = (rules: CSSRuleList): void =>
    {
        for (const rule of rules)
        {
            if (rule instanceof CSSStyleRule && rule.selectorText === ':root')
            {
                for (const property of rule.style) if (property.startsWith('--rl-color-')) names.add(property);
            }
            else if ('cssRules' in rule)
            {
                visit((rule as CSSGroupingRule).cssRules);
            }
        }
    };
    for (const sheet of document.styleSheets) visit(sheet.cssRules);
    return [...names].sort();
}

describe('the roles', () =>
{
    it('are nine', () =>
    {
        expect(colorVariables()).toEqual(ROLES.map(([name]) => `--rl-color-${name}`).sort());
    });

    it.each(ROLES)('%s is %s first, for a browser without light-dark()', (name, light) =>
    {
        expect(rootValues(`--rl-color-${name}`).plain).toEqual([light.replace(/\s+/g, '')]);
    });

    it.each(ROLES)('%s is light-dark() of %s and %s where the browser has it', (name, light, dark) =>
    {
        expect(rootValues(`--rl-color-${name}`).inAtRule).toEqual([`light-dark(${light},${dark})`.replace(/\s+/g, '')]);
    });

    it('leave the color-scheme of the page as it is', () =>
    {
        expect(getComputedStyle(document.documentElement).colorScheme).toBe('normal');
    });
});

describe.each(FORMS)('the roles in the %s form', form =>
{
    /** The role as a class sets it: a background, or the text color for muted, which has no fill. */
    async function shown(name: string, scheme?: Scheme): Promise<string>
    {
        if (name === 'muted') return (await colorsOf(form, 'rl-color-muted', scheme)).color;
        return (await colorsOf(form, `rl-bg-${name}`, scheme)).background;
    }

    it.each(ROLES.map(([name]) => name))('%s is light where no color-scheme is set', async name =>
    {
        expect(await shown(name)).toBe(roleValue(name, 'light'));
    });

    it.each(ROLES.map(([name]) => name))('%s is dark inside an element with color-scheme: dark', async name =>
    {
        expect(await shown(name, 'dark')).toBe(roleValue(name, 'dark'));
    });

    it('is light again inside an element with color-scheme: light, in one that is dark', async () =>
    {
        const inner = boxOf(form, 'rl-color-muted', 'data-target style="color-scheme: light;"', 'Text');
        const { target, remove } = await mount(`<div style="color-scheme: dark;">${inner}</div>`, { form });
        expect(getComputedStyle(target).color).toBe(roleValue('muted', 'light'));
        remove();
    });
});

describe.each(FORMS)('the text color in the %s form', form =>
{
    it('rl-color-primary is the text color', async () =>
    {
        expect((await colorsOf(form, 'rl-color-primary')).color).toBe(roleValue('primary', 'light'));
    });

    it.each(FILLS)('rl-bg-%s sets the text to surface', async name =>
    {
        expect((await colorsOf(form, `rl-bg-${name}`)).color).toBe(roleValue('surface', 'light'));
    });

    it.each(FILLS)('rl-bg-%s sets the text to the dark surface in the dark scheme', async name =>
    {
        expect((await colorsOf(form, `rl-bg-${name}`, 'dark')).color).toBe(roleValue('surface', 'dark'));
    });

    it('lets rl-color-* beside a fill set another text color', async () =>
    {
        expect((await colorsOf(form, 'rl-bg-accent rl-color-primary')).color).toBe(roleValue('primary', 'light'));
    });

    it.each(['surface', 'surface-alt'])('rl-bg-%s leaves the text color as it is', async name =>
    {
        expect((await colorsOf(form, `rl-bg-${name}`)).color).toBe(INHERITED);
    });

    it('rl-color-muted sets the muted color', async () =>
    {
        expect((await colorsOf(form, 'rl-color-muted')).color).toBe(roleValue('muted', 'light'));
    });
});

describe.each(['light', 'dark'] as const)('muted text in the %s scheme', scheme =>
{
    it('is readable on the surface', () =>
    {
        const probe = document.createElement('div');
        probe.style.cssText = `color-scheme: ${scheme}; color: var(--rl-color-muted); background: var(--rl-color-surface);`;
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

describe.each(FORMS)('the names before 0.8.0 in the %s form', form =>
{
    it.each(['rl-color-secondary', 'rl-color-text'])('%s does nothing', async name =>
    {
        expect((await colorsOf(form, name)).color).toBe(INHERITED);
    });

    it('rl-bg-secondary does nothing', async () =>
    {
        expect((await colorsOf(form, 'rl-bg-secondary')).background).toBe('rgba(0, 0, 0, 0)');
    });

    it.each(['primary', 'accent', 'subtle', 'warm', 'cool'])('rl-gradient-%s does nothing', async name =>
    {
        const { target, remove } = await mount(boxOf(form, `rl-gradient-${name}`, 'data-target', 'Text'), { form });
        expect(getComputedStyle(target).backgroundImage).toBe('none');
        remove();
    });
});

describe('the variables before 0.8.0', () =>
{
    it.each(['--rl-color-secondary', '--rl-color-text', '--rl-gradient-primary', '--rl-gradient-accent', '--rl-gradient-subtle', '--rl-gradient-warm', '--rl-gradient-cool'])('%s is not set', name =>
    {
        expect(rootValues(name)).toEqual({ plain: [], inAtRule: [] });
    });
});

// Muted was `rl-color-text-muted`, from `--rl-color-text-muted`, before 0.6.0, and `rl-text-muted` set half opacity
describe('the names muted had before 0.6.0', () =>
{
    it.each(FORMS)('rl-color-text-muted does nothing in the %s form', async form =>
    {
        expect((await colorsOf(form, 'rl-color-text-muted')).color).toBe(INHERITED);
    });

    it('rl-text-muted does not change the opacity', async () =>
    {
        const { target, remove } = await mount('<div class="rl-text-muted">Text</div>');
        try
        {
            expect(getComputedStyle(target).opacity).toBe('1');
        }
        finally
        {
            remove();
        }
    });

    it('--rl-color-text-muted is not set', () =>
    {
        expect(rootValues('--rl-color-text-muted')).toEqual({ plain: [], inAtRule: [] });
    });
});
