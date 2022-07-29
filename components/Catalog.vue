<template lang="pug">
  UILoader(v-if='loading')
  .content(v-else)
    .catalog
      AlbumCard(
        v-for='album in allAlbums'
        :album='album'
        @click.prevent='openAlbum(album.id)')
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
      
      const newAlbums = this.copyAlbums
      this.allAlbums = Object.values({...this.allAlbums, ...newAlbums})
      this.preLoad = false
    },
    openAlbum(id) {
      console.log(id)
      this.$router.push(`/albums/${id}`)
    }
  },
  computed: {
    copyAlbums() {
      const copyAlbums = JSON.parse(JSON.stringify(this.albums))

      for (let key in copyAlbums) {
        let currentAlbum = copyAlbums[key]
        let authorId = currentAlbum.peopleIds.find(i => {
          // return this.people[i].typeName === 'Исполнитель'
          return this.people[i]
        })

        currentAlbum.parent = this.people[authorId]
      }

      return copyAlbums
    },
    albums() {
      return this.$store.getters['albums/albums']
    },
    people() {
      return this.$store.getters['albums/people']
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

.catalog {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 20px;
  padding-bottom: 80px;

  @include desktop {
    grid-template-columns: repeat(3, 1fr);
  }

  @include tablets {
    grid-template-columns: repeat(2, 1fr);
  }
}

.more-albums {
  display: flex;
  justify-content: center;
}
</style>