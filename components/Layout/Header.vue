<template lang="pug">
  .header
    img.logo(:src='require("~/assets/images/logo.svg")')
    .nav
      NuxtLink.nav__link(to='/') Каталог
    .icon.icon-search
    .icon.icon-menu
</template>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

.header {
  background-color: #007AFF;
  width: 100%;
  padding: 15px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @include phones {
    padding: 15px 50px;
  }

  @include phones-small {
    padding: 15px 15px;
  }
}

.nav {
  @include phones {
    display: none;
  }

  &__link {
    color: #FFF;
  }
}

.icon {
  color: #FFF;

  &-search {
    @include phones {
      display: none;
    }
  }

  &-menu {
    display: none;
    font-size: 25px;

    @include phones {
      display: block;
    }
  }
}
</style>