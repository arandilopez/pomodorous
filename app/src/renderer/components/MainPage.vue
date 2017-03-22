<template>
  <div id="main-page">
    <div id="container">
      <timer></timer>
    </div>
  </div>
</template>

<script>
import Timer from './Timer'

export default {
  components: {
    Timer
  },
  name: 'main-page'
}
</script>

<style scoped>
#main-page #container {
  margin-top: 40px;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
