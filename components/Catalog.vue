<template lang="pug">
  UILoader(v-if='loading')
  .catalog(v-else)
    AlbumCard(
      v-for='album in albums'
      :album='album')
</template>

<script>
export default {
  name: 'Catalog',
  data: () => ({
    loading: true
  }),
  async mounted() {
    await this.$store.dispatch('albums/loadAlbums', 1)
    this.loading = false
  },
  computed: {
    albums() {
      const data = this.$store.getters['albums/albums']
      console.log(data)
      return data.data?.collection?.album || {}
    }
  }
}
</script>