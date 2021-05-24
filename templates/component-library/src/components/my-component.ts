import { controller } from '@github/catalyst'

@controller
class MyComponentElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 'Hello My Component!'
  }
}

export default MyComponentElement
