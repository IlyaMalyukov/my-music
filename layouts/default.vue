<template lang="pug">
  .page
    LayoutHeader
    .container
      Nuxt
    LayoutPlayer
</template>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

  .container {
    padding: 30px 100px 100px;

    @include phones {
      padding: 30px 50px 100px;
    }

    @include phones-small {
      padding: 30px 15px 100px;
    }
  }
</style>