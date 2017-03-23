<template lang="html">
  <nav class="nav">
    <div class="nav-right">
      <router-link :to="{name: 'settings-page'}" class="nav-item" active-class="is-active">
        <span class="icon">
          <i class="fa fa-sliders"></i>
        </span>
      </router-link>
      <a class="nav-item" @click="openGithub">
        <span class="icon">
          <i class="fa fa-github"></i>
        </span>
      </a>
    </div>
  </nav>
</template>

<script>
import { shell } from 'electron'

export default {
  name: 'navbar',
  mounted () {
    console.log('NAV')
  },

  computed: {
    canGoMain () {
      return this.$router.currentRoute.name !== 'main-page'
    }
  },

  methods: {
    openGithub () {
      shell.openExternal('https://github.com/arandilopez/pomodorous')
    }
  }
}
</script>

<style lang="scss">

</style>
