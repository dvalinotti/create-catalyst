import { controller } from '@github/catalyst'

@controller
class {{capital name}}Element extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 'Hello {{capital name space=true}}!'
  }
}
