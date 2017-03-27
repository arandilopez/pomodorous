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
          <clock
            :total-secs="totalSteps"
            :playing="playing"
            @tictac="incrementSteps">
          </clock>
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
        <button type="button" class="button is-info">
          <i class="fa fa-undo"></i>
        </button>
        <button type="button" class="button is-danger" @click="stop">
          <i class="fa fa-stop"></i>
        </button>
      </div>
    </div>
</div>
</template>

<script>
import RadialProgressBar from 'vue-radial-progress/src/RadialProgressBar'
import {mapState} from 'vuex'
import Clock from './Clock'

export default {
  data () {
    return {
      completedSteps: 0,
      startColor: '#72d0eb',
      stopColor: '#00a1cf',
      innerStrokeColor: '#eee',
      strokeWidth: 7,
      playing: false,
      focusItem: 'Work work work!'
    }
  },

  computed: {
    ...mapState({
      cycleTime: state => state.settings.cycleTime
    }),

    playOrPauseIcon () {
      return (this.playing) ? 'fa fa-pause' : 'fa fa-play'
    },

    totalSteps () {
      return this.cycleTime * 60 // converts mins to segs
    }
  },

  methods: {
    playOrPause () {
      this.playing = !this.playing
    },

    incrementSteps () {
      this.completedSteps += 1
    },

    stop () {
      this.completedSteps = 0
      this.$emit('restart')
    }
  },

  components: {
    RadialProgressBar,
    Clock
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
