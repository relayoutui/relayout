// <rl-div> in React's JSX, for TypeScript: import it once in a React project that uses the element.
//
//   import type {} from '@relayoutui/relayout/types/react';
//
// React renders a custom element's props as attributes, so the classes go in `class`, not `className`:
// <rl-div class="rl-row rl-gap-m">. Types only: the element itself registers with `import '@relayoutui/relayout'`.

import type { DetailedHTMLProps, HTMLAttributes } from 'react';

/** What <rl-div> takes in JSX: what a div takes, and `class`. */
type RelayoutDivProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & { class?: string };

declare module 'react'
{
    namespace JSX
    {
        interface IntrinsicElements
        {
            'rl-div': RelayoutDivProps;
        }
    }
}
