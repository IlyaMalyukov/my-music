<template lang="pug">
  .track(@click.prevent='setToPlayer')
    .track__button-wrapper
      img.track__img(
        :class='{"track__img_playing" : isCurrentTrack}'
        :src='track.coverUrl'
        :alt='track.name')
      .track__buttons(v-if='isCurrentTrack')
        button.track__button(
          v-if='!isPlay'
          @click.prevent='play')
          .icon-play3.icon
        button.track__button(
          v-else
          @click.prevent='pause')
          .icon-pause2.icon
    .info
      .info__author {{author.name}}
      .info__name {{track.name}}
      .info__duration {{duration}} 
</template>

<script>
export default {
  name: 'Track',
  props: {
    track: Object,
    author: Object,
    people: Object
  },
  methods: {
    setToPlayer() {
      let trackData = {
        track: this.track,
        author: this.author,
        singers: this.singers,
        duration: this.duration
      }

      this.$store.dispatch('player/assignTrackData', trackData)
    },
    play() {
      this.$store.dispatch('player/changePlayerState', true)
    },
    pause() {
      this.$store.dispatch('player/changePlayerState', false)
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
    },
    isCurrentTrack() {
      const currentTrack = this.$store.getters['player/currentTrackData'].track
      return currentTrack?.name === this.track?.name
    },
    isPlay() {
      return this.$store.getters['player/playerState']
    },
    singers() {
      let singersNames = []
      singersNames.push(this.author?.name)

      this.track.peopleIds.forEach(i => {
        let singerName = this.people[i].name
        if (!singersNames.includes(singerName)) {
          singersNames.push(singerName)
        }
      })

      return singersNames.join(', ')
    }
  },
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

  &__button-wrapper {
    position: relative;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__img {
    position: absolute;
    width: 60px;
    z-index: 1;

    &_playing {
      opacity: .5;
    }
  }

  &__buttons {
    z-index: 2;
  }

  &__button {
    cursor: pointer;
    border: 2px solid #4a4a4a;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
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