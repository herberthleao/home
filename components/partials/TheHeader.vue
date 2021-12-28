<template>
  <header ref="root" class="page-header-container">
    <div class="grid grid-cols-3 items-center h-full">
      <div class="col-span-1 self-start">
        <nuxt-link to="/" title="Herberth Leão">
          <brands-the-signature styling="page-header-brand" />
        </nuxt-link>
      </div>
      <div class="col-span-2 self-baseline lg:hidden">
        <icons-menu-hamb />
      </div>
      <div id="headerMenu" class="col-span-3 hidden lg:grid lg:col-span-2">
        <the-header-nav />
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.page-header-container {
  @apply container;
  @apply max-h-screen;
  @apply py-5;

  color: $main-color;
  font-family: $second-font;
}
</style>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  setup() {
    const menuStatus = useMenu();
    const root = ref(null);

    // Toggles mobile menu when button is clicked.
    watch(menuStatus, (currentStatus) => {
      const header = root.value
      const menu = header.querySelector('#headerMenu')

      if (currentStatus) {
        header.classList.add('h-screen');
        menu.classList.remove('hidden')
      } else {
        header.classList.remove('h-screen');
        menu.classList.add('hidden')
      }
    });

    return { root };
  }
});
</script>