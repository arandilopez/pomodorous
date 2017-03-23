<template lang="html">
  <div id="settings-page">
    <div class="columns">
      <div class="column">
        <router-link :to="{name: 'main-page'}" class="button is-white is-pulled-right">
          <i class="fa fa-close"></i>
        </router-link>
      </div>
    </div>
    <div class="columns">
      <div class="column container">
        <h1 class="title is-2">Settings</h1>
        <div class="columns">
          <div class="column">
            <div class="field">
              <label class="label">Cycle time: {{cycleTime}} mins</label>
              <p class="control">
                <slider type="success" size="large" :value="cycleTime" :max="60" :min="20" :step="5" @change="updateCycle" class="input"></slider>
              </p>
            </div>
          </div>
          <div class="column">
            <div class="field">
              <label class="label">Short brake time: {{shortBrakeTime}} mins</label>
              <p class="control">
                <slider type="success" size="large" :value="shortBrakeTime" :max="15" :min="1" :step="1" @change="updateShort" class="input"></slider>
              </p>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-half">
            <div class="field">
              <label class="label">Long brake time: {{longBrakeTime}} mins</label>
              <p class="control">
                <slider type="success" size="large" :value="longBrakeTime" :max="45" :min="15" :step="5" @change="updateLong" class="input"></slider>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from 'vue-bulma-slider/src/Slider'

export default {
  data () {
    return {
      cycleTime: 25,
      shortBrakeTime: 5,
      longBrakeTime: 20
    }
  },

  methods: {
    updateCycle (val) {
      this.cycleTime = Number(val)
    },

    updateShort (val) {
      this.shortBrakeTime = Number(val)
    },

    updateLong (val) {
      this.longBrakeTime = Number(val)
    }
  },

  components: { Slider }
}
</script>

<style lang="scss" scoped>
#settings-page .container {
  margin-left: 20px;
  margin-right: 20px;
}
</style>
