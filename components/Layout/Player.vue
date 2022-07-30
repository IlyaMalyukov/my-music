<template lang="pug">
.player-wrapper
  .player(v-if='trackName')
    .player__button-wrapper
      img.player__img(:src='cover')
      button.player__button(
        v-if='!isPlay'
        @click.prevent='play')
        .icon-play3.icon
      button.player__button(
        v-else
        @click.prevent='pause')
        .icon-pause2.icon
    .track-info
      .track-info__text.track-info__author {{singers}}
      .track-info__text.track-info__name {{trackName}}
      .track-info__duration {{duration}}
</template>

<script>
if (process.client) {
  const soundManager = require('soundmanager2')
}

export default {
  name: 'Player',
  data: () => ({
    soundManager: soundManager,
    isFirstTrack: true
  }),
  methods: {
    play() {
      this.$store.dispatch('player/changePlayerState', true)
    },
    async pause() {
      await this.$store.dispatch('player/changePlayerState', false)
    }
  },
  computed: {
    isPlay() {
      return this.$store.getters['player/playerState']
    },
    currentTrackData() {
      return this.$store.getters['player/currentTrackData']
    },
    trackName() {
      return this.currentTrackData?.track?.name
    },
    authorName() {
      return this.currentTrackData?.author?.name
    },
    singers() {
      return this.currentTrackData?.singers
    },
    duration() {
      return this.currentTrackData?.duration
    },
    cover() {
      return this.currentTrackData?.track?.coverUrl
    },
    currentTrackUrl() {
      if (this.isFirstTrack) {
        return 'https://enazadevkz.cdnvideo.ru/tank1/sony/A10301A0004574902L_20210331042345765/resources/ad5a61f35b99.mp3'
      }

      return 'https://enazadevkz.cdnvideo.ru/tank3/medialand/2021_05_12/1.mp3'
    }
  },
  watch: {
    async trackName() {
      this.isFirstTrack = !this.isFirstTrack
      await this.pause()
      this.play()
    },
    isPlay() {
      if (this.isPlay) {
        this.soundManager.play('base', this.currentTrackUrl)
      } else {
        this.soundManager.pause('base')
      }
    }
  }

}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

.player {
  background-color: #F5F5F5;
  width: 100%;
  padding: 15px 100px;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  z-index: 3;

  @include phones {
    padding: 15px 50px;
  }

  @include phones-small {
    padding: 15px 15px;
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
    opacity: .5;
    z-index: 1;
  }

  &__button {
    z-index: 2;
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

.icon {
  font-size: 25px;
  color: #4a4a4a;
}

.track-info {
  padding-left: 10px;
  font-size: 15px;
  line-height: 1.3;

  &__text {
    width: 238px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &__author {
    font-weight: 400;
    color: #A7A7A7;
  }

  &__name {
    font-weight: 700;
    color: #4F4F4F;
  }

  &__duration {
    font-weight: 400;
    color: #A7A7A7;
  }
}
</style>