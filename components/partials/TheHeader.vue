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
          <button class="justify-self-end lg:hidden" @click="toggleMenu">
            <svg viewBox="0 0 264.58333 264.58334" version="1.1" class="w-10">
              <g
                ref="menuIcon"
                transform="matrix(1.5561449,0,0,1.5561449,56.15205,-118.86365)"
                style="
                  stroke-width: 4.71887;
                  stroke-miterlimit: 4;
                  stroke-dasharray: none;
                "
              >
                <path
                  id="menuLineTop"
                  style="
                    fill: none;
                    stroke: #ffffff;
                    stroke-width: 4.71887;
                    stroke-linecap: round;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 4;
                    stroke-dasharray: none;
                    stroke-opacity: 1;
                  "
                  d="M 86.370351,147.03776 H 11.48637"
                />
                <path
                  id="menuLineBottom"
                  style="
                    fill: none;
                    stroke: #ffffff;
                    stroke-width: 4.71887;
                    stroke-linecap: round;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 4;
                    stroke-dasharray: none;
                    stroke-opacity: 1;
                  "
                  d="m 11.486371,175.75394 h 74.88398"
                />
              </g>
            </svg>
          </button>
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
      const lineUp = menuIcon.value.querySelector("#menuLineTop");
      const lineDown = menuIcon.value.querySelector("#menuLineBottom");
      if (status) {
        lineUp.classList.add("line-up-open");
        lineDown.classList.add("line-down-open");
        status = false;
      } else {
        lineUp.classList.remove("line-up-open");
        lineDown.classList.remove("line-down-open");
        status = true;
      }
    };

    return { toggleMenu, menuIcon };
  }
});
</script>

<style lang="scss" scoped>
.line-up-open {
  animation: spin-up 0.5s linear 1;
  animation-fill-mode: forwards;
}

.line-down-open {
  animation: down 0.5s linear infinite;
  animation-fill-mode: forwards;
}

@keyframes spin-up {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(45deg);
    transform-origin: 0;
  }
}

@keyframes spin-down {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(-45deg);
    transform-origin: 0;
  }
}
</style>
