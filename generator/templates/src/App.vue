<template>
  <div>
    <router-view />
    <loading :pending="showLoading" />
    <error-notify :last-error="lastXhrErrorResponse" />
  </div>
</template>

<script lang="ts">
import Loading from '@/components/Loading.ts'
import { axiosHandlers } from '@/domains/api/client'
import { ErrorNotify } from '@laura-wert/vee-form-handler'
import { AxiosError } from 'axios'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: { ErrorNotify, Loading },
})
export default class App extends Vue {
  get lastXhrErrorResponse(): AxiosError | null {
    return axiosHandlers.errorHandler.getLastError()
  }

  get showLoading(): boolean {
    return axiosHandlers.loadingHandler.isLoading()
  }
}
</script>
