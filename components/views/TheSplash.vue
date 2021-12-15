<template>
  <main class="main-splash-container">
    <brands-the-signature styling="splash-container-brand" />
  </main>
</template>

<style lang="scss" scoped>
.main-splash-container {
  @apply fixed;
  @apply flex;
  @apply w-full;
  @apply h-screen;
  @apply max-h-screen;

  background: $color-gray-dark;
}
</style>
