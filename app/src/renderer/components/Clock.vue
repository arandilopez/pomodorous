<template lang="html">
  <div>
    <h1 class="title is-1">
      {{mins | two_digits}}:{{segs | two_digits}}
    </h1>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
const clockSound = require('./Timer/clock_tic.wav')

export default {
  props: [],
  data () {
    return {
      clockSound: new Audio(clockSound)
    }
  },

  computed: {
    ...mapState({
      totalSteps: state => state.clock.totalSteps,
      currentSteps: state => state.clock.currentSteps,
      currentTime: state => state.clock.currentTime,
      isPlaying: state => state.clock.isPlaying
    }),

    mins () {
      return parseInt((this.currentTime / 60) % 60, 10)
    },

    segs () {
      return parseInt(this.currentTime % 60, 10)
    }
  },

  methods: {
    ...mapActions([
      'setCurrentTime',
      'decreaseCurrentTime',
      'setIntervalId'
    ])
  },

  created () {
    this.clockSound.volume = 0.1

    let intervalId = setInterval(() => {
      if (this.isPlaying && this.currentTime > 0) {
        this.decreaseCurrentTime()
        this.clockSound.play()
        this.$emit('tictac')
      } else if (this.currentTime <= 0) {
        this.$emit('ended')
      }
    }, 1000)

    this.setIntervalId(intervalId)
  }
}
</script>

<style lang="scss">
</style>
