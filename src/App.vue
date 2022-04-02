<template>
  <router-view>

  </router-view>
</template>

<script>
import {ref, provide } from 'vue'

export default {
  name: 'App',
  setup() {
    const asideVisible = ref(false)
    provide('aside',asideVisible)
  }
}
</script>
