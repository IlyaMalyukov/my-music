<template lang="pug">
.card
  img.card__image(:src='album.coverUrl' alt='img')
  .card__title {{album.name}} • {{album.year}}
  .card__singer Исполнитель
  .card__tracks Треков: {{album.trackCount}}
</template>

<script>
export default {
  name: 'AlbumCard',
  props: {
    album: {
      type: Object
    }
  },
  mounted() {
    console.log(this.album)
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  box-shadow: none;
  flex-direction: column;

  &__image {
    border-radius: 20px;
  }

  &__title {
    padding-top: 15px;
    color: #4F4F4F;
    font-size: 19px;
    line-height: 1.2;
    font-weight: 700;
  }

  &__singer {
    color: #A7A7A7;
    font-size: 19px;
    line-height: 1.2;
    font-weight: 400;
  }

  &__tracks {
    padding-top: 10px;
    color: #A7A7A7;
    font-size: 14px;
    line-height: 1.2;
    font-weight: 400;
  }
}
</style>