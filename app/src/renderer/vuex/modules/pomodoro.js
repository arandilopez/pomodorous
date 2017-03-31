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
  },

  isPomodoro (state) {
    return state.currentCycleType === pomodoros.POMODORO
  },

  isShortBrake (state) {
    return state.currentCycleType === pomodoros.SHORT_BRAKE
  },

  isLongBrake (state) {
    return state.currentCycleType === pomodoros.LONG_BRAKE
  }
}

const mutations = {
  [types.POMODORO_INCREMENT_CYCLES_COUNT] (state) {
    state.cyclesCount++
  },

  [types.POMODORO_INCREMENT_COUNT] (state) {
    state.pomodorosCount++
  },

  [types.POMODORO_RESET_COUNT] (state) {
    state.pomodorosCount = 0
  },

  [types.POMODORO_INCREMENT_SHORT_BRAKES] (state) {
    state.shortBreaksCount++
  },

  [types.POMODORO_RESET_SHORT_BRAKES] (state) {
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
  },

  incrementShortBrakesCount ({commit}) {
    commit(types.POMODORO_INCREMENT_SHORT_BRAKES)
  },

  pomodoroCycle ({commit, state}) {
    if (!state.currentCycleIsPomodoro) {
      commit(types.POMODORO_SET_CYCLE_TYPE, pomodoros.POMODORO)
    }
  },

  shortCycle ({commit, state}) {
    if (!state.currentCycleIsShortBrake) {
      commit(types.POMODORO_SET_CYCLE_TYPE, pomodoros.SHORT_BRAKE)
    }
  },

  longCycle ({commit, state}) {
    if (!state.currentCycleIsLongBrake) {
      commit(types.POMODORO_SET_CYCLE_TYPE, pomodoros.LONG_BRAKE)
      commit(types.POMODORO_RESET_COUNT)
      commit(types.POMODORO_RESET_SHORT_BRAKES)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
