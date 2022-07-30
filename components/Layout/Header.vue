<template lang="pug">
  .header
    NuxtLink(to='/')
      img.logo(:src='require("~/assets/images/logo.svg")')
    .nav
      NuxtLink.nav__link(to='/') Каталог
      .nav__link Рекомендации
      .nav__link Моя музыка
      .nav__link Радио
    .icon.icon-search
    .icon.icon-menu(@click.prevent='$emit("open-menu")')
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
  display: flex;

  @include tablets {
    display: none;
  }

  &__link {
    cursor: pointer;
    color: #FFF;
    padding: 0 10px;
    font-size: 15px;
  }
}

.icon {
  color: #FFF;
  cursor: pointer;

  &-search {
    @include tablets {
      display: none;
    }
  }

  &-menu {
    display: none;
    font-size: 25px;

    @include tablets {
      display: block;
    }
  }
}
</style>