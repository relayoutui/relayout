// <rl-div> in Vue templates, for TypeScript and Vue's tools: import it once in a Vue project that uses the element.
//
//   import type {} from '@relayoutui/relayout/types/vue';
//
// Vue also has to be told that rl-div is a custom element, with `compilerOptions.isCustomElement`, or it looks for a
// component of that name. Types only: the element itself registers with `import '@relayoutui/relayout'`.

import type { HTMLAttributes, PublicProps } from 'vue';

declare module 'vue'
{
    interface GlobalComponents
    {
        /** What <rl-div> takes in a template: what a div takes, `class` included. */
        'rl-div': new () => HTMLElement & { $props: HTMLAttributes & PublicProps };
    }
}
