import * as types from '../mutation-types'

const state = {
  totalSteps: 0,
  currentSteps: 0,
  currentTime: 0,
  isPlaying: false,
  intervalId: 0
}

const mutations = {
  [types.CLOCK_PLAY] (state) {
    state.isPlaying = true
  },

  [types.CLOCK_PAUSE] (state) {
    state.isPlaying = false
  },

  [types.CLOCK_RESTART] (state) {
    state.currentTime = Number(state.totalSteps)
  },

  [types.CLOCK_STOP] (state) {
    state.isPlaying = false
    state.currentTime = Number(state.totalSteps)
  },

  [types.CLOCK_SET_TIME] (state, time) {
    state.currentTime = time
  },

  [types.CLOCK_DECREASE_CURRENT_TIME] (state) {
    state.currentTime--
  },

  [types.CLOCK_SET_CURRENT_STEPS] (state, steps) {
    state.currentSteps = steps
  },

  [types.CLOCK_INCREMENT_CURRENT_STEPS] (state) {
    state.currentSteps++
  },

  [types.CLOCK_SET_TOTAL_STEPS] (state, steps) {
    state.totalSteps = steps
  },

  [types.CLOCK_SET_INTERVAL_ID] (state, id) {
    state.intervalId = id
  }
}

const actions = {
  playOrPause ({state, commit}) {
    if (state.isPlaying) {
      commit(types.CLOCK_PAUSE)
    } else {
      commit(types.CLOCK_PLAY)
    }
  },

  restart ({state, commit}) {
    commit(types.CLOCK_RESTART)
    commit(types.CLOCK_SET_CURRENT_STEPS, 0)
  },

  stop ({state, commit}) {
    commit(types.CLOCK_STOP)
    commit(types.CLOCK_SET_CURRENT_STEPS, 0)
  },

  setCurrentTime ({state, commit}, time) {
    if (state.currentTime <= 0) {
      commit(types.CLOCK_SET_TIME, time)
    }
  },

  decreaseCurrentTime ({commit}) {
    commit(types.CLOCK_DECREASE_CURRENT_TIME)
  },

  incrementSteps ({commit}) {
    commit(types.CLOCK_INCREMENT_CURRENT_STEPS)
  },

  setTotalSteps ({commit}, steps) {
    commit(types.CLOCK_SET_TOTAL_STEPS, steps)
  },

  setIntervalId ({commit}, id) {
    commit(types.CLOCK_SET_INTERVAL_ID, id)
  }
}

export default {
  // namespaced: true,
  state,
  mutations,
  actions
}
