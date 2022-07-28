<template lang="pug">
  UILoader(v-if='loading')
  .content(v-else)
    .catalog
      AlbumCard(
        v-for='album in allAlbums'
        :album='album')
    .more-albums
      UIPreLoader(v-if='preLoad')  
      button(
        v-else
        class="button is-dark"
        @click.prevent='loadData') Больше альбомов
</template>

<script>
export default {
  name: 'Catalog',
  data: () => ({
    loading: true,
    preLoad: false,
    currentPage: 0,
    allAlbums: {}
  }),
  async mounted() {
    await this.loadData()
    this.loading = false
  },
  methods: {
    async loadData() {
      this.preLoad = true
      this.currentPage += 1
      await this.$store.dispatch('albums/loadAlbums', this.currentPage)
      const newAlbums = this.albums
      this.allAlbums = Object.values({...this.allAlbums, ...newAlbums})
      this.preLoad = false
      console.log(this.allAlbums)
    }
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
  padding-bottom: 80px;
}

.more-albums {
  display: flex;
  justify-content: center;
}
</style>