<template lang="pug">
  UILoader(v-if='loading')
  .album-page(v-else)
    AlbumMainCard(
      :album='album'
      :author='author')
    AlbumTracks(
      :tracks='tracks'
      :author='author'
      :people='people')
</template>

<script>
import api from '@/api/config'

export default {
  head() {
    return {
      title: this.album.name
    }
  },
  layout: 'default',
  asyncData: () => ({
    album: {},
    people: {},
    tracks: {},
    author: {},
    loading: true
  }),
  async mounted() {
    await this.loadData()
  },
  methods: {
    async loadData() {
      const fullData = await this.$axios({
      method: 'GET',
      url: api.baseUrl,
      params: {
        method: 'product.getCard',
        productId: this.albumId
      }
      })

      this.album = fullData.data.collection.album[this.albumId]
      this.people = fullData.data.collection.people
      this.tracks = fullData.data.collection.track

      this.prepareAlbum()
      this.loading = false
    },
    prepareAlbum() {
      const singerId = this.album.peopleIds.find(i => {
        return this.people[i]
      })

      this.author = this.people[singerId]
    }
  },
  computed: {
    albumId() {
      return this.$route.params.id
    }
  }
}
</script>