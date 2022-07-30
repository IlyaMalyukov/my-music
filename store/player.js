export const state = () => ({
  currentTrackData: {},
  playerState: false
})

export const mutations = {
  setTrackData(state, data) {
    state.currentTrackData = data
  },
  setValuePlayerState(state, data) {
    state.playerState = data
  }
}

export const actions = {
  assignTrackData({commit}, data) {
    commit('setTrackData', data)
  },
  changePlayerState({commit}, data) {
    commit('setValuePlayerState', data)
  }
}

export const getters = {
  currentTrackData: (state) => state.currentTrackData,
  playerState: (state) => state.playerState
}