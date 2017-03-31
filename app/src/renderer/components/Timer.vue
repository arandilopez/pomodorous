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
import {mapState, mapActions, mapGetters} from 'vuex'
import Clock from './Clock'
import * as pomodoros from '../vuex/pomodoro-types'

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

    ...mapGetters({
      isPomodoro: 'isPomodoro',
      isLongBrake: 'isLongBrake',
      isShortBrake: 'isShortBrake',
      nextCycle: 'nextCycle'
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
      'setCurrentTime',

      'pomodoroCycle',
      'shortCycle',
      'longCycle',
      'incrementPomodorosCount',
      'incrementShortBrakesCount',
      'incrementCyclesCount'
    ]),

    endedCycle () {
      this.stop()
      if (this.nextCycle === pomodoros.POMODORO) {
        if (this.isLongBrake) {
          this.initPomodoroCycle()
          this.incrementCyclesCount()
        } else {
          this.initPomodoroCycle()
          this.incrementPomodorosCount()
        }
      } else if (this.nextCycle === pomodoros.SHORT_BRAKE) {
        this.shortBrakeSound.play()
        this.initShortCycle()
        this.incrementShortBrakesCount()
      } else if (this.nextCycle === pomodoros.LONG_BRAKE) {
        this.longBrakeSound.play()
        this.initLongBrake()
      }
    },

    initPomodoroCycle () {
      this.pomodoroCycle()
      this.setTotalSteps(this.cycleTime * 60)
      this.setCurrentTime(Number(this.totalSteps))
    },

    initShortCycle () {
      this.shortCycle()
      this.setTotalSteps(this.shortBrakeTime * 60)
      this.setCurrentTime(Number(this.totalSteps))
    },

    initLongBrake () {
      this.longCycle()
      this.setTotalSteps(this.longBrakeTime * 60)
      this.setCurrentTime(Number(this.totalSteps))
    }
  },

  created () {
    this.longBrakeSound.volume = 0.1
    this.shortBrakeSound.volume = 0.1
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
