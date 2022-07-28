import api from '../api/config'

export const state = () => ({
  albums: {}
})

export const mutations = {
  setAlbums(state, albums) {
    state.albums = albums
  },
}

export const actions = {
  async loadAlbums({commit}, page) {
    const albums = await this.$axios({
      method: 'GET',
      url: api.baseUrl,
      params: {
        method: 'product.getNews',
        page: page,
        limit: 10
      }
    })
    commit('setAlbums', albums)
  }
}

export const getters = {
  albums: (state) => state.albums,
}