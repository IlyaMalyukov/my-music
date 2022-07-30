import api from '../api/config'

export const state = () => ({
  fullData: {}
})

export const mutations = {
  setAlbums(state, data) {
    state.fullData = data
  },
}

export const actions = {
  async loadAlbums({commit}, page) {
    const data = await this.$axios({
      method: 'GET',
      url: api.baseUrl,
      params: {
        method: 'product.getNews',
        page: page,
        limit: 12
      }
    })
    commit('setAlbums', data.data)
  }
}

export const getters = {
  fullData: (state) => state.fullData,
  albums: (state) => state.fullData.collection.album,
  people: (state) => state.fullData.collection.people
}