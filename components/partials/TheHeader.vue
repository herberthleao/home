<template>
  <header class="container py-5">
    <div class="grid grid-cols-3 items-center">
      <div>
        <nuxt-link to="/" title="Herberth Leão">
          <brands-the-signature styling="page-header-brand" />
        </nuxt-link>
      </div>
      <div class="col-span-2">
        <nav class="grid">
          <span
            ref="menuIcon"
            class="menu-hamb-icon justify-self-end lg:hidden"
            @click="toggleMenu"
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
          <!--<div>
            <nuxt-link to="">Sobre</nuxt-link>
            <nuxt-link to="">Experiência</nuxt-link>
            <nuxt-link to="">Trabalho</nuxt-link>
            <nuxt-link to="">Educação</nuxt-link>
            <nuxt-link to="">Contato</nuxt-link>
          </div>-->
        </nav>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    // Mobile menu status.
    let status = false;
    const menuIcon = ref(null);

    // Changes menu status.
    const toggleMenu = () => {
      const icon = menuIcon.value;
      if (status) {
        icon.classList.remove("open");
        status = false;
      } else {
        icon.classList.add("open");
        status = true;
      }
    };

    return { toggleMenu, menuIcon };
  }
});
</script>

<style lang="scss" scoped>
.menu-hamb-icon {
  color: $color-white;
  cursor: pointer;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  width: 1.5rem;

  span {
    background: $color-white;
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
