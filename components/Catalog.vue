<template lang="pug">
  .catalog
    AlbumCard(
      v-for='album in albums'
      :album='album')
</template>

<script>
export default {
  name: 'Catalog',
  async mounted() {
    await this.$store.dispatch('albums/loadAlbums', 1)
    console.log(this.albums)
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