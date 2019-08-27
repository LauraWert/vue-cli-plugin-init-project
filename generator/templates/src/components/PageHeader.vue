<template>
  <div>
    <div class="header">
      <q-toolbar class="toolbar">
        <q-btn
          class="q-mr-sm"
          flat
          icon="menu"
          @click="$emit('openSideMenu')"
        />
        <q-space />
        <top-menu class="user-top-menu" />
      </q-toolbar>
    </div>
  </div>
</template>

<script lang="ts">
import TopMenu from '@/components/TopMenu.vue'
import { QBtn, QSpace, QToolbar } from 'quasar'
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({
  components: { TopMenu, QBtn, QSpace, QToolbar },
})
export default class PageHeader extends Vue {}
</script>

<style lang="stylus" scoped>
  @import "../styles/variables.styl"

  .header
    margin-left auto
    margin-right auto
    background-color: white
    color $primary

  .toolbar
    height 50px
</style>
