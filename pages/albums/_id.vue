<template lang="pug">
  UILoader(v-if='loading')
  .album-page(v-else)
    AlbumMainCard(:album='album')
</template>

<script>
import api from '@/api/config'

export default {
  layout: 'default',
  asyncData: () => ({
    fullData: {},
    album: {},
    people: {},
    tracks: {},
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
      this.tracks = fullData.data.collection.tracks

      this.prepareAlbum()
      this.loading = false
    },
    prepareAlbum() {
      const singerId = this.album.peopleIds.find(i => {
        // return this.people[i].typeName === 'Исполнитель'
        return this.people[i].typeName
      })
      this.album.parent = this.people[singerId]
    }
  },
  computed: {
    albumId() {
      return this.$route.params.id
    }
  }
}
</script>