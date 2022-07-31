<template lang="pug">
.card
  img.card__image(:src='album.coverUrl' alt='img')
  .info
    .info__title.info__text {{album.name}}
    .info__author.info__text {{author.name}}
    .info__tracks.info__text Треков: {{album.trackCount}}
    .info__duration.info__text Длительность: {{duration}}
</template>

<script>
import {formatDuration} from '@/helpers/formatDuration'

export default {
  name: 'MainCard',
  props: {
    album: {
      type: Object
    },
    author: {
      type: Object
    }
  },
  computed: {
    duration() {
      return formatDuration(this.album.duration)
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

  &__text {
    padding-top: 7px;
    color: #4F4F4F;
    font-size: 19px;
    line-height: 1.2;
    font-weight: 400;

    @include phones {
      font-size: 14px;
    }
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

  &__tracks {
    color: #A7A7A7;
  }

  &__duration {
    font-size: 14px;
    color: #A7A7A7;
  }
}
</style>