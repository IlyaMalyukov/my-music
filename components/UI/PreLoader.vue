<template lang="pug">
    .icon-spinner
</template>

<style lang="scss" scoped>
.icon-spinner {
  font-size: 50px;
  color: #007AFF;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { 
    transform: rotate(0deg)
  }

  to { 
    transform: rotate(360deg)
  }
}
</style>