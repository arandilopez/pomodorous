import * as types from '../mutation-types'

const state = {
  totalSteps: 0,
  currentSteps: 0,
  currentTime: 0,
  isPlaying: false
}

const mutations = {
  [types.CLOCK_PLAY] (state) {
    state.isPlaying = true
  },

  [types.CLOCK_PAUSE] (state) {
    state.isPlaying = false
  },

  [types.CLOCK_RESTART] (state) {
    state.currentTime = 0
  },

  [types.CLOCK_STOP] (state) {
    state.isPlaying = false
    state.currentTime = 0
  }
}

const actions = {
  play ({state, commit}) {

  },

  pause ({state, commit}) {

  },

  restart ({state, commit}) {

  },

  stop ({state, commit}) {

  },

  run ({ state }) {
  }
}

export default {
  state,
  mutations,
  actions
}
