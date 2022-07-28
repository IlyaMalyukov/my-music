<template lang="pug">
.card
  img.card__image(:src='album.coverUrl' alt='img')
  .info
    .info__title {{album.name}}
    .info__singer {{album.parent.name}}
    .info__tracks Треков: {{album.trackCount}}
</template>

<script>
export default {
  name: 'MainCard',
  props: {
    album: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

.card {
  display: flex;
  box-shadow: none;

  @include phones {
    flex-direction: column;
  }

  @include phones-small {
    max-width: 278px;
    margin: 0 auto;
  }

  &__image {
    border-radius: 20px;
    max-width: 278px;
  }
}

.info {
  padding-left: 55px;

  @include phones {
    padding-left: 0;
    align-self: flex-start;
  }

  &__title {
    padding-top: 15px;
    color: #4F4F4F;
    font-size: 48px;
    line-height: 1.2;
    font-weight: 700;

    @include phones {
      font-size: 24px;
    }
  }

  &__singer {
    padding-top: 7px;
    color: #4F4F4F;
    font-size: 19px;
    line-height: 1.2;
    font-weight: 400;

    @include phones {
      font-size: 14px;
    }
  }

  &__tracks {
    padding-top: 7px;
    color: #A7A7A7;
    font-size: 19px;
    line-height: 1.2;
    font-weight: 400;

    @include phones {
      font-size: 14px;
    }
  }
}
</style>