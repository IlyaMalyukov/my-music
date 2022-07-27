<template lang="pug">
  .album
    .album__title {{album.name}}
</template>

<script>
export default {
  name: 'AlbumCard',
  props: {
    album: {
      type: Object
    }
  }
}
</script>