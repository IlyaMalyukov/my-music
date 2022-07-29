<template lang="pug">
.player-wrapper
  .player(v-if='trackName')
    .player__buttons
      button.player__button(
        v-if='!isPlay'
        @click.prevent='play')
        .icon-play3.icon
      button.player__button(
        v-else
        @click.prevent='pause')
        .icon-pause2.icon
    .track-info
      .track-info__text.track-info__author {{authorName}}
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
    firstTrack: true,
    isPlay: false
  }),
  methods: {
    play() {
      this.soundManager.play('base', this.currentTrackUrl)
      this.isPlay = true
    },
    pause() {
      this.soundManager.pause('base')
      this.isPlay = false
    }
  },
  computed: {
    currentTrackData() {
      return this.$store.getters['player/currentTrackData']
    },
    trackName() {
      return this.currentTrackData?.track?.name
    },
    authorName() {
      return this.currentTrackData?.author?.name
    },
    duration() {
      return this.currentTrackData?.duration
    },
    currentTrackUrl() {
      if (this.firstTrack) {
        return 'https://enazadevkz.cdnvideo.ru/tank1/sony/A10301A0004574902L_20210331042345765/resources/ad5a61f35b99.mp3'
      }

      return 'https://enazadevkz.cdnvideo.ru/tank3/medialand/2021_05_12/1.mp3'
    }
  },
  watch: {
    trackName() {
      this.play()
      this.firstTrack = !this.firstTrack
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

  @include phones {
    padding: 15px 50px;
  }

  @include phones-small {
    padding: 15px 15px;
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

.icon {
  font-size: 25px;
  color: #4a4a4a;
}

.track-info {
  padding-left: 10px;
  font-size: 15px;
  line-height: 1.3;

  &__text {
    white-space: nowrap;
    width: 238px;
    overflow: hidden;
  }

  &__author {
    font-weight: 400;
    color: #A7A7A7;
    text-overflow: ellipsis;
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