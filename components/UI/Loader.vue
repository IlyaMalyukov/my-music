<template lang="pug">
  .screen
    // иконка из кастомного иконочного шрифта (в папке styles/my-icon-font)
    .icon-spinner
</template>

<style lang="scss" scoped>
.screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

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