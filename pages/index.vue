<template lang="pug">
  .main-page
    no-ssr
      Catalog
</template>

<script>
export default {
  name: 'IndexPage',
  layout () {
    return 'default'
  },
}
</script>

<style lang="scss" scoped>
.main-page {
  width: 100%;
  height: 100%;
}
</style>
