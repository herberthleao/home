<template>
  <main class="main-splash-container">
    <brands-the-signature styling="splash-container-brand" />
  </main>
</template>

<style lang="scss" scoped>
.main-splash-container {
  @apply fixed;
  @apply grid;
  @apply h-screen;
  @apply max-h-screen;
  @apply overflow-hidden;
  @apply w-full;
  @apply z-10;

  background: $color-gray-dark;
}
</style>
