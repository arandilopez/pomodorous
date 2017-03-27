import * as types from '../mutation-types'
import * as pomodoros from '../pomodoro-types'

const state = {
  cyclesCount: 0,
  currentCycleType: pomodoros.POMODORO,
  pomodorosCount: 0,
  shortBreaksCount: 0
}

const getters = {
  nextCycle (state) {
    if (state.currentCycleType === pomodoros.SHORT_BRAKE || state.currentCycleType === pomodoros.LONG_BRAKE) {
      return pomodoros.POMODORO
    } else {
      if (state.shortBreaksCount < 3) {
        return pomodoros.SHORT_BRAKE
      } else {
        return pomodoros.LONG_BRAKE
      }
    }
  }
}

const mutations = {
  [types.POMODORO_INCREMENT_CYCLES_COUNT] (state) {
    state.cyclesCount++
  },

  [types.POMODORO_INCREMENT_COUNT] (state) {
    state.pomodorosCount++
  },

  [types.POMODORO_INCREMENT_SHORT_BRAKES] (state) {
    state.shortBreaksCount++
  },

  [types.POMODORO_SET_CYCLE_TYPE] (state, type) {
    state.currentCycleType = type
  }
}

const actions = {
  incrementCyclesCount ({commit}) {
    commit(types.POMODORO_INCREMENT_CYCLES_COUNT)
  },

  incrementPomodorosCount ({commit}) {
    commit(types.POMODORO_INCREMENT_COUNT)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
