<template>
  <div>
    <router-view />
    <loading :pending="$anyXhrPending()" />
    <error-notify :last-error="$lastXhrErrorResponse()" />
  </div>
</template>

<script lang="ts">
import Loading from '@/components/Loading.ts'
import { ErrorNotify } from '@laura-wert/vee-form-handler'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: { ErrorNotify, Loading },
})
export default class App extends Vue {}
</script>
