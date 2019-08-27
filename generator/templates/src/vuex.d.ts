import { VuexXhrCreator } from 'vuex-xhr-state'
/* tslint:disable interface-name */

declare module 'vuex/types' {
  interface Store<S> {
    $reset: () => void
    xhrPlugins: VuexXhrCreator[]
  }
}
