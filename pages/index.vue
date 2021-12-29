<template>
  <div class="container">
    <main class="lg:py-16 lg:px-20 py-16 px-8">
      <div class="main-section-greeting">Olá, meu nome é</div>
      <div class="main-section-name">Herberth Leão.</div>
      <div class="main-section-sub">Eu resolvo problemas usando <span>PHP</span></div>
      <p></p>
    </main>
  </div>
</template>

<style lang="scss">
.main-section-greeting {
  @apply leading-10;

  color: $second-color;
  font-family: $second-font;
}

.main-section-name {
  @apply font-bold;
  @apply leading-10;
  @apply text-5xl;

  color: $color-white;
  font-family: $main-font;
}

.main-section-sub {
  @apply font-bold;
  @apply leading-10;
  @apply text-5xl;

  color: $color-gray-light;
  font-family: $main-font;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  head() {
    return {
      title: 'Herberth Leão'
    };
  }
});
</script>
