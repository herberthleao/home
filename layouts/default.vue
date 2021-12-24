<template>
  <div class="page-container-main">
    <views-the-splash v-if="splash" />
    <partials-the-header />
    <slot />
    <partials-the-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    useMeta({
      meta: [
        {
          name: 'author',
          content: 'Herberth Leão, herberth.leao@pm.me'
        },
        {
          name: 'msapplication-TileColor',
          content: '#DA532C'
        },
        {
          name: 'msapplication-config',
          content: '/assets/images/icons/favicons/browserconfig.xml'
        },
        {
          name: 'theme-color',
          content: '#FFFFFF'
        },
        {
          link: 'apple-touch-icon',
          sizes: '180x180',
          href: '/assets/images/icons/favicons/apple-touch-icon.png'
        }
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/assets/images/icons/favicons/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/assets/images/icons/favicons/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/assets/images/icons/favicons/favicon-16x16.png'
        },
        {
          rel: 'manifest',
          href: '/assets/images/icons/favicons/site.webmanifest'
        },
        {
          rel: 'mask-icon',
          href: '/assets/images/icons/favicons/safari-pinned-tab.svg',
          color: '#5BBAD5'
        },
        {
          rel: 'shortcut icon',
          href: '/assets/images/icons/favicons/favicon.ico'
        }
      ]
    });

    const splash = useSplash();

    return { splash };
  }
});
</script>

<style lang="scss">
.page-container-main {
  background: $color-gray-dark;
}
</style>
