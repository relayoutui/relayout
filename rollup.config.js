import { readFileSync } from 'node:fs';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

// The release sets the version in package.json before it builds, and the CSS banner gets it from the same release
const { version } = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));

// Plugin to minify CSS in template literals
function minifyLitCSS() {
  return {
    name: 'minify-lit-css',
    transform(code, id) {
      if (id.endsWith('.ts') || id.endsWith('.js')) {
        // Minify CSS in css`...` or lit.css`...` template literals
        // Regex matches `css` preceded by a word boundary or property access
        const transformed = code.replace(/(\bcss)\s*`([\s\S]*?)`/g, (match, tag, css) => {
          const minified = css
            .replace(/\/\*[\s\S]*?\*\//g, '')   // Remove comments
            .replace(/\s*\n\s*/g, ' ')           // Remove newlines and extra spaces
            .replace(/\s*([{};,])\s*/g, '$1')    // Remove spaces around punctuation, except before ':' (see below)
            .replace(/:\s+/g, ':')               // Remove spaces after colons
            .replace(/\s+/g, ' ')                // Collapse multiple spaces
            .trim();
          // A space before ':' is kept: in ':host([x]) ::slotted(y)' it is the descendant combinator, and
          // without it the selector becomes ':host([x])::slotted(y)', which never matches.
          
          return `${tag}\`${minified}\``;
        });
        
        if (transformed !== code) {
          return { code: transformed, map: null };
        }
      }
      return null;
    }
  };
}

const banner = `/*!
 * Relayout v${version} | Responsive layout system
 * Copyright (c) 2025 Codesense LLC
 * MIT License: https://github.com/relayoutui/relayout/blob/main/LICENSE 
 */`;

/**
 * One build of the script. The package's own, `dist/js/relayout.js`, imports Lit, which the package depends on, so
 * an app's bundler shares one copy of it with the app's own. The bundled one, `dist/js/relayout.bundle.js`, has Lit
 * inside, for a page that loads the script from a CDN with no bundler.
 */
function build({ bundled })
{
  return {
    input: 'src/js/index.ts',
    external: bundled ? [] : [/^lit(\/|$)/],
    output: {
      file: bundled ? 'dist/js/relayout.bundle.js' : 'dist/js/relayout.js',
      format: 'esm',
      sourcemap: true,
      // The TypeScript plugin writes the paths of the sources with a second `src` in them (`../../src/src/js/…`),
      // which no file is at, and Vitest warns about them. The sources are in the map as well, so a debugger has them.
      sourcemapPathTransform: relativeSourcePath => relativeSourcePath.replace(/(^|\/)src\/src\//, '$1src/'),
      banner
    },
    plugins: [
      ...(bundled ? [resolve()] : []),
      typescript({
        tsconfig: './tsconfig.json',
        // The declarations are the package's, written once
        declaration: !bundled,
        // No declaration maps: they point at the sources, which the package doesn't ship (`files` is `dist`)
        declarationMap: false,
        declarationDir: bundled ? undefined : './dist/js/types'
      }),
      minifyLitCSS(),  // Run after TypeScript to affect compiled JS (uses loose regex to catch aliased imports)
      terser({
        ecma: 2020,
        format: {
          comments: /^!/  // Preserve only /*! ... */ license comments (see also 'some')
        },
        compress: {
          drop_console: false,
          passes: 2
        },
        mangle: {
          properties: {
            regex: /^_/
          }
        }
      })
    ]
  };
}

export default [build({ bundled: false }), build({ bundled: true })];
