<template>
  <div id="main-page">
    <div id="container">
      <timer></timer>
    </div>
  </div>
</template>

<script>
import Timer from '../components/Timer'
import { mapState } from 'vuex'

export default {
  components: {
    Timer
  },

  computed: {
    ...mapState({
      intervalId: state => state.clock.intervalId
    })
  },

  beforeRouteLeave (to, prev, next) {
    clearInterval(this.intervalId)
    next()
  },
  name: 'main-page'
}
</script>

<style scoped>
#main-page #container {
  margin-top: 20px;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
