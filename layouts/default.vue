<template>
  <div class="page-container-main">
    <views-the-splash v-if="splash" />
    <partials-the-header />
    <slot />
    <partials-the-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
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
