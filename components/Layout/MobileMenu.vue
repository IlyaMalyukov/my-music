<template lang="pug">
  .menu
    .content
      .icon-cross(@click.prevent='$emit("close-menu")')
      .nav(@click.prevent='$emit("close-menu")')
        NuxtLink.nav__link(to='/') Каталог
        .nav__link Рекомендации
        .nav__link Моя музыка
        .nav__link Радио
</template>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

.menu {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: #007AFF;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.nav {
  text-align: center;

  &__link {
    cursor: pointer;
    color: #FFF;
    font-size: 25px;
    padding-bottom: 10px;
  }
}

.icon-cross {
  position: absolute;
  top: 22px;
  right: 100px;
  font-size: 20px;
  color: #FFF;
  cursor: pointer;

  @include phones {
    right: 50px;
  }

  @include phones-small {
    right: 15px;
  }
}
</style>