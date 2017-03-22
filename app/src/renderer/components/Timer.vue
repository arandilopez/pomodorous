<template>
  <div id="#timer">
    <radial-progress-bar :diameter="300"
    :completed-steps="completedSteps"
    :total-steps="totalSteps"
    :start-color="startColor"
    :stop-color="stopColor"
    :inner-stroke-color="innerStrokeColor"
    :strokeWidth="strokeWidth">
      <h1 class="title is-3">Total steps: {{ totalSteps }}</h1>
      <h3 class="subtitle is-5">Completed steps: {{ completedSteps }}</h3>
    </radial-progress-bar>
</div>
</template>

<script>
import RadialProgressBar from 'vue-radial-progress/src/RadialProgressBar'

export default {
  data () {
    return {
      completedSteps: 750,
      totalSteps: 1500,
      startColor: '#589e79',
      stopColor: '#960d41',
      innerStrokeColor: '#c2c2c2',
      strokeWidth: 5
    }
  },

  components: {
    RadialProgressBar
  }
}
</script>


<style lang="scss" scoped>
#timer {
  margin: 0 auto;
}
</style>
