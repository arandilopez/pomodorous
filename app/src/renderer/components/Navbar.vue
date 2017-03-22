<template lang="html">
  <nav class="nav has-shadow">
    <div class="nav-left">
      <a class="nav-item">
        Pomodorous
      </a>
    </div>

    <div class="nav-center">
      <a class="nav-item">
        <span class="icon">
          <i class="fa fa-sliders"></i>
        </span>
      </a>
      <a class="nav-item">
        <span class="icon">
          <i class="fa fa-github"></i>
        </span>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  mounted () {
    console.log('NAV')
  }
}
</script>

<style lang="scss">
</style>
