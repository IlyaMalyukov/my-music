<template lang="pug">
  .track(@click.prevent='playTrack')
    img.track__image(:src='track.coverUrl' :alt='track.name')
    .info
      .info__author {{author.name}}
      .info__name {{track.name}}
      .info__duration {{duration}} 
</template>

<script>
export default {
  name: 'Track',
  props: {
    track: {
      type: Object
    },
    author: {
      type: Object
    }
  },
  methods: {
    playTrack() {
      let trackData = {
        track: this.track,
        author: this.author,
        duration: this.duration
      }

      this.$store.dispatch('player/assignTrackData', trackData)
    }
  },
  computed: {
    duration() {
      // const duration = this.$moment.duration(this.track.duration, 'seconds')._data
      // return `${duration.minutes}:${duration.seconds}`
      // Такой же код есть в карточке альбома на стр.альбома, вынести в helper

      const duration = this.track.duration
      const minutes = Math.floor(duration / 60)
      const seconds = String(duration % 60).padStart(2, '0')

      return `${minutes}:${seconds}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

.track {
  cursor: pointer;
  display: flex;
  margin: 0 35px 30px 0;
  width: 100%;
  max-width: 377px;

  &:hover {
    transform: scale(1.05)
  }

  @include desktop {
    max-width: 300px;
  }

  @include phones {
    margin-right: 0;
    max-width: 335px;
  }

  @include phones-small {
    max-width: 290px;
  }

  &__image {
    max-width: 60px;
  }
}

.info {
  padding-left: 10px;
  font-size: 15px;
  line-height: 1.2;

  &__author {
    font-weight: 400;
    color: #A7A7A7;
  }

  &__name {
    padding-top: 3px;
    font-weight: 700;
    color: #4F4F4F;
  }

  &__duration {
    padding-top: 3px;
    font-weight: 400;
    color: #A7A7A7;
  }
}
</style>