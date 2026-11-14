import { LitElement, TemplateResult, html } from 'lit';

export class SlotElement extends LitElement 
{
    // Typed through 'lit', the one package the declarations then name: 'lit-html' is Lit's own dependency, which a
    // strict package manager doesn't let a project's types reach
    render(): TemplateResult {
        return html`<slot></slot>`;
    }
}