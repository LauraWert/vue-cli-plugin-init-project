<template>
  <q-btn
    label="Meer opties"
    icon-right="keyboard_arrow_down"
    flat
    no-caps
    dense
    icon="person_outline"
    class="user-top-menu-button"
    data-name="menu-options"
  >
    <q-menu
      auto-close
      anchor="bottom right"
      self="top right"
      transition-show="jump-down"
      transition-hide="jump-up"
    >
      <q-list style="min-width: 100px" class="text-bold">
        <q-item clickable>
          <q-item-section class="">
            placeHolderItem
          </q-item-section>
        </q-item>
        <q-item clickable>
          <q-item-section>
            placeHolderItem
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item clickable>
          <q-item-section>
            placeHolderItem
          </q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script lang="ts">
import { QBtn, QItem, QItemSection, QList, QMenu, QSeparator } from 'quasar'
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({
  components: {
    QBtn,
    QMenu,
    QList,
    QItem,
    QItemSection,
    QSeparator,
  },
})
export default class TopMenu extends Vue {}
</script>
