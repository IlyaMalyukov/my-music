<template lang="pug">
.card(@click.prevent='openAlbum(album.id)')
  img.card__image(:src='album.coverUrl' alt='img')
  .card__title {{album.name}} • {{album.year}}
  .card__author {{album.parent.name}}
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
  methods: {
    openAlbum(id) {
      this.$router.push(`/albums/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

.card {
  display: flex;
  box-shadow: none;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    transform: scale(1.05)
  }

  &__image {
    border-radius: 20px;
  }

  &__title {
    padding-top: 15px;
    color: #4F4F4F;
    font-size: 19px;
    line-height: 1.2;
    font-weight: 700;

    @include phones {
      font-size: 14px;
    }
  }

  &__author {
    color: #A7A7A7;
    font-size: 19px;
    line-height: 1.2;
    font-weight: 400;

    @include phones {
      font-size: 14px;
    }
  }

  &__tracks {
    padding-top: 10px;
    color: #A7A7A7;
    font-size: 14px;
    line-height: 1.2;
    font-weight: 400;

    @include phones {
      font-size: 10px;
    }
  }
}
</style>