<template>
  <div>
    <nav class="header-container-nav">
      <nuxt-link to="">Sobre</nuxt-link>
      <nuxt-link to="">Experiência</nuxt-link>
      <nuxt-link to="">Projetos</nuxt-link>
      <nuxt-link to="">Formações</nuxt-link>
      <nuxt-link to="">Artigos</nuxt-link>
      <a class="container-nav-button" href="" download>Currículo</a>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.header-container-nav {
  @apply grid;
  @apply grid-flow-row;
  @apply gap-y-5;
  @apply items-center;
  @apply justify-center;
  @apply text-center;

  @apply lg:grid-flow-col;
  @apply lg:gap-x-5;
  @apply lg:gap-y-0;
  @apply lg:justify-end;

  a {
    @apply transition-colors;
    @apply ease-in-out;
    @apply duration-300;

    &:hover {
      color: $second-color;
    }
  }

  .container-nav-button {
    @apply bg-transparent;
    @apply border;
    @apply rounded-md;
    @apply py-2;
    @apply px-3;
    @apply transition-colors;
    @apply ease-in-out;
    @apply duration-300;

    border-color: $second-color;
    color: $second-color;

    &:hover {
      background: $second-light-color;
    }
  }
}
</style>
