<template>
  <div class="container">
    <main class="">
      <div class="main-section-greeting">Olá, meu nome é</div>
      <div>Herberth Leão.</div>
      <div>Eu resolvo problemas usando <span>PHP</span></div>
      <p></p>
    </main>
  </div>
</template>

<style lang="scss">
.main-section-greeting {
  color: $color-gray-medium;
  font-family: $second-font;
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
