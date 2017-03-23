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
    console.log(state)
  }
}

const actions = {
  updateCycle ({commit}, value) {
    commit(types.SET_CYCLE_TIME, Number(value))
  },

  updateShort ({commit}, value) {
    commit(types.SET_SHORT_BRAKE_TIME, Number(value))
  },

  updateLong ({commit}, value) {
    commit(types.SET_LONG_BRAKE_TIME, Number(value))
  }
}

export default {
  state,
  mutations,
  actions
}
