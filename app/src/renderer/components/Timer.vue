<template>
  <div id="#timer">
    <div class="columns">
      <div class="column">
        <radial-progress-bar :diameter="300"
        :completed-steps="currentSteps"
        :total-steps="totalSteps"
        :start-color="startColor"
        :stop-color="stopColor"
        :inner-stroke-color="innerStrokeColor"
        :strokeWidth="strokeWidth">
          <clock
            @tictac="incrementSteps"
            @ended="endedCycle">
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
        <button type="button" class="button is-info" @click="restart">
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
import {mapState, mapActions} from 'vuex'
import Clock from './Clock'
const longBrakeSound = require('./Timer/long_brake_bell.mp3')
const shortBrakeSound = require('./Timer/short_brake_bell.wav')

export default {
  data () {
    return {
      startColor: '#72d0eb',
      stopColor: '#00a1cf',
      innerStrokeColor: '#eee',
      strokeWidth: 7,
      focusItem: 'Work work work!',
      longBrakeSound: new Audio(longBrakeSound),
      shortBrakeSound: new Audio(shortBrakeSound)
    }
  },

  computed: {
    ...mapState({
      cycleTime: state => state.settings.cycleTime,
      longBrakeTime: state => state.settings.longBrakeTime,
      shortBrakeTime: state => state.settings.shortBrakeTime,

      isPlaying: state => state.clock.isPlaying,
      currentSteps: state => state.clock.currentSteps,
      totalSteps: state => state.clock.totalSteps
    }),

    playOrPauseIcon () {
      return (this.isPlaying) ? 'fa fa-pause' : 'fa fa-play'
    }
  },

  methods: {
    ...mapActions([
      'playOrPause',
      'restart',
      'stop',

      'incrementSteps',
      'setTotalSteps',
      'setCurrentTime'
    ]),

    endedCycle () {

    }
  },

  created () {
    this.setTotalSteps(this.cycleTime * 60)
    this.setCurrentTime(Number(this.totalSteps))
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
