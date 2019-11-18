// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Vue, { VNode } from 'vue'
/* eslint-disable @typescript-eslint/interface-name-prefix, @typescript-eslint/no-empty-interface */

declare global {
  namespace JSX {
    interface Element extends VNode {}

    interface ElementClass extends Vue {}

    interface IntrinsicElements {
      [elem: string]: unknown
    }
  }
}
