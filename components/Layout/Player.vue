<template lang="pug">
  .player
    .title Player
</template>

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