import * as types from '../mutation-types'

const state = {
  cycleTime: 25,
  longBrakeTime: 20,
  shortBrakeTime: 5
}

const mutations = {
  [types.SET_SHORT_BRAKE_TIME] (state, payload) {
    state.shortBrakeTime = payload
  },
  [types.SET_LONG_BRAKE_TIME] (state, payload) {
    state.longBrakeTime = payload
  },
  [types.SET_CYCLE_TIME] (state, payload) {
    state.cycleTime = payload
  }
}

export default {
  state,
  mutations
}
