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
    fullData() {
      return this.$store.getters['albums/albums']
    },
    albums() {
      const albums = this.fullData.data?.collection?.album
      const copyAlbums = JSON.parse(JSON.stringify(albums))

      for (let key in copyAlbums) {
        let currentAlbum = copyAlbums[key]
        currentAlbum.parent = this.singers[currentAlbum.peopleIds[0]]
      }

      return copyAlbums
    },
    singers() {
      const people = this.fullData.data.collection.people
      const copyPeople = JSON.parse(JSON.stringify(people))

      for (let key in copyPeople) {
        if (copyPeople[key].typeName !== 'Исполнитель') {
          delete copyPeople[key]
        }
      }

      return copyPeople
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