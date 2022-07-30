<template lang="pug">
  .page
    LayoutHeader(@open-menu='isOpenMenu = true')
    .app-container
      Nuxt
    no-ssr  
      LayoutPlayer
    LayoutMobileMenu(
      v-if='isOpenMenu'
      @close-menu='isOpenMenu = false')
</template>

<script>
export default {
  data: () => ({
    isOpenMenu: false
  })
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

  .app-container {
    padding: 30px 100px 100px;

    @include phones {
      padding: 30px 50px 100px;
    }

    @include phones-small {
      padding: 30px 15px 100px;
    }
  }
</style>