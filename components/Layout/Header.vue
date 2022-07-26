<template lang="pug">
  .header
    .nav
      NuxtLink.nav__link(to='/') Каталог
</template>

<style lang="scss" scoped>
.header {
  background-color: #007AFF;
  width: 100%;
  padding: 15px 30px;
}

.nav {
  &__link {
    color: #FFF;
  }
}
</style>