<template lang="pug">
  .tracks
    AlbumTrack(
      v-for='track in tracks'
      :track='track'
      :author='author')
</template>

<script>
export default {
  name: 'Tracks',
  props: {
    tracks: Object,
    author: Object
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

.tracks {
  padding-top: 35px;
  max-width: 1251px;
  display: flex;
  flex-wrap: wrap;

  @include desktop {
    
  }
}
</style>