import {controller} from '@github/catalyst'

@controller
class HelloWorldElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 'Hello World!'
  }
}