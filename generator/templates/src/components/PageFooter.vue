<template>
  <q-footer class="bg-primary">
    <div class="row footer justify-center">
      <div class="col-md-8 col-xs-12 row">
        <div class="col-md-2 row col-sm-3 col-xs-3 q-mt-xl">
          placeholder
        </div>
        <div class="col-md-8 col-sm-9 col-xs-9">
          <div class="title">
            placeholder
          </div>
          <div class="subtitle">
            placeholder
          </div>
        </div>
        <div class="col-md-2 gt-sm q-mt-xl">
          placeholder
        </div>
      </div>
    </div>
  </q-footer>
</template>

<script lang="ts">
import { QFooter } from 'quasar'
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({
  components: { QFooter },
})
export default class PageFooter extends Vue {}
</script>

<style lang="stylus" scoped>
  .footer
    margin 0 auto 0
    overflow hidden
    min-height 120px
    max-height 140px
    font-size 18px
    .title
      font-size 24px
      font-weight bold
      padding-top 44px
</style>
