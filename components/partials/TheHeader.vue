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
          <button class="justify-self-end lg:hidden">
            <svg viewBox="0 0 100 100" version="1.1" class="w-10">
              <g transform="translate(-6.7494104,-142.30087)">
                <path
                  style="
                    fill: none;
                    stroke: #ffffff;
                    stroke-width: 4.71886623;
                    stroke-linecap: round;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 4;
                    stroke-dasharray: none;
                    stroke-opacity: 1;
                  "
                  d="M 86.370351,147.03776 H 11.48637"
                  id="path879"
                />
                <path
                  style="
                    fill: none;
                    stroke: #ffffff;
                    stroke-width: 4.71886623;
                    stroke-linecap: round;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 4;
                    stroke-dasharray: none;
                    stroke-opacity: 1;
                  "
                  d="m 11.486371,175.75394 h 74.88398"
                  id="path1030"
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

<style lang="scss" scoped>
#path1030 {
  animation: spin 5s linear infinite;
  transform-origin: 100% 100%;
}

@keyframes spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
