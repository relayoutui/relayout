import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

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

export default {
  input: 'src/js/index.ts',
  output: {
    file: 'dist/js/relayout.js',
    format: 'esm',
    sourcemap: true,
    banner: `/*!
 * Relayout - Responsive layout system
 * Copyright (c) 2025 Lucian Pacurar
 * MIT License: https://github.com/relayoutui/relayout/blob/main/LICENSE 
 */`
  },
  plugins: [
    resolve(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: './dist/js/types'
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
