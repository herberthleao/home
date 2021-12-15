<template>
  <div>
    <views-the-splash v-if="splash" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const splash = useSplash();

    return { splash };
  },
  head() {
    return {
      title: "Herberth Leão"
    };
  }
});
</script>
