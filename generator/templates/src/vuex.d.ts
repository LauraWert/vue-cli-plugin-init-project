import { VuexXhrCreator } from 'vuex-xhr-state'

declare module 'vuex/types' {
  // eslint-disable-next-line @typescript-eslint/interface-name-prefix
  interface Store<S> {
    $reset: () => void
    xhrPlugins: VuexXhrCreator[]
  }
}
