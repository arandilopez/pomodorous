<template lang="html">
  <div>
    <h1 class="title is-1">
      {{mins | two_digits}} : {{segs | two_digits}}
    </h1>
  </div>
</template>

<script>
export default {
  props: ['totalSecs', 'playing'],

  data () {
    return {
      time: 0
    }
  },

  computed: {
    mins () {
      return (this.time / 60) % 60 | 0
    },

    segs () {
      return this.time % 60 | 0
    }
  },

  created () {
    this.time = Number(this.totalSecs)

    setInterval(() => {
      if (this.playing && this.time > 0) {
        this.time -= 1
        this.$emit('tictac')
      } else if (this.time <= 0) {
        this.$emit('ended')
      }
    }, 1000)

    this.$on('restart', () => {
      console.log('Clock listen for restart!!!')
    })
  }
}
</script>

<style lang="scss">
</style>
