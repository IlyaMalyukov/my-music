export const state = () => ({
  currentTrackData: {}
})

export const mutations = {
  setTrackData(state, data) {
    state.currentTrackData = data
  }
}

export const actions = {
  assignTrackData({commit}, data) {
    commit('setTrackData', data)
  }
}

export const getters = {
  currentTrackData: (state) => state.currentTrackData
}