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
    console.log(this.singers)
  },
  computed: {
    fullData() {
      return this.$store.getters['albums/albums']
    },
    albums() {
      const albums = this.fullData.data?.collection?.album
      let copyAlbums = Object.assign({}, albums)
      return copyAlbums
    },
    singers() {
      return this.fullData.data.collection.people
    }
  }
}
</script>

<style lang="scss" scoped>
.catalog {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 20px;
}
</style>