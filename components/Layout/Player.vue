<template lang="pug">
  .player
    .title Player
    button(@click.prevent='soundManager.play("base", "https://enazadevkz.cdnvideo.ru/tank1/sony/A10301A0004574902L_20210331042345765/resources/ad5a61f35b99.mp3")') 
</template>

<script>
import soundManager from 'soundmanager2'

export default {
  name: 'Player',
  fetch: () => ({
    soundManager: soundManager
  }),
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
}
</style>