<template>
  <div id="#timer">
    <div class="columns">
      <div class="column">
        <radial-progress-bar :diameter="300"
        :completed-steps="completedSteps"
        :total-steps="totalSteps"
        :start-color="startColor"
        :stop-color="stopColor"
        :inner-stroke-color="innerStrokeColor"
        :strokeWidth="strokeWidth">
          <h1 class="title is-1">25:00</h1>
        </radial-progress-bar>
      </div>
    </div>
    <div class="columns has-text-centered">
      <div class="column">
        <p>
          <h3 class="subtitle is-5">Focus on: <strong>{{focusItem}}</strong></h3>
        </p>
      </div>
    </div>
    <div class="columns has-text-centered">
      <div class="column">
        <button type="button" class="button is-primary" @click="playOrPause">
          <i :class="playOrPauseIcon"></i>
        </button>
      </div>
      <div class="column">
        <button type="button" class="button is-danger">
          <i class="fa fa-stop"></i>
        </button>
      </div>
    </div>
</div>
</template>

<script>
import RadialProgressBar from 'vue-radial-progress/src/RadialProgressBar'

export default {
  data () {
    return {
      completedSteps: 1400,
      totalSteps: 1500,
      startColor: '#72d0eb',
      stopColor: '#00a1cf',
      innerStrokeColor: '#eee',
      strokeWidth: 7,
      playing: false,

      focusItem: 'Work work work!'
    }
  },

  computed: {
    playOrPauseIcon () {
      return (this.playing) ? 'fa fa-pause' : 'fa fa-play'
    }
  },

  methods: {
    playOrPause () {
      this.playing = !this.playing
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

  radial-progress-bar {
    padding-bottom: 20px;
  }
}
</style>
