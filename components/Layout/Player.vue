<template lang="pug">
  .player
    .player__buttons
      button.player__button(
        v-if='!isPlay'
        @click.prevent='play')
        .icon-play3.icon
      button.player__button(
        v-else
        @click.prevent='pause')
        .icon-pause2.icon
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
    currentTrackUrl() {
      if (this.firstTrack) {
        return 'https://enazadevkz.cdnvideo.ru/tank1/sony/A10301A0004574902L_20210331042345765/resources/ad5a61f35b99.mp3'
      }

      return 'https://enazadevkz.cdnvideo.ru/tank3/medialand/2021_05_12/1.mp3'
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
</style>