<template>
  <span class="grid self-center">
    <span
      ref="menuIcon"
      class="menu-hamb-icon justify-self-end"
      @click="toggleMenuStatus"
    >
      <span></span>
      <span></span>
      <span></span>
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    // Mobile menu status.
    const status = useMenu();
    const menuIcon = ref(null);

    // Changes menu status.
    const toggleMenuStatus = () => {
      const icon = menuIcon.value;
      if (status.value) {
        icon.classList.remove('open');
        status.value = false;
      } else {
        icon.classList.add('open');
        status.value = true;
      }
    };

    return { toggleMenuStatus, menuIcon };
  }
});
</script>

<style lang="scss" scoped>
.menu-hamb-icon {
  color: $main-color;
  cursor: pointer;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  width: 1.5rem;

  span {
    background: $main-color;
    border-radius: 9px;
    display: block;
    height: 0.1rem;
    margin: 0.4rem;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
    width: 100%;
  }

  span:nth-child(1) {
    transform-origin: left center;
  }

  span:nth-child(2) {
    transform-origin: left center;
  }

  span:nth-child(3) {
    transform-origin: left center;
  }

  &.open span:nth-child(1) {
    transform: rotate(45deg);
  }

  &.open span:nth-child(2) {
    width: 0%;
    opacity: 0;
  }

  &.open span:nth-child(3) {
    transform: rotate(-45deg);
  }
}
</style>
