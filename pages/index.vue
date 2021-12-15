<template>
  <div>
    <views-the-splash v-if="splash" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  head () {
    return {
      title: "Herberth Leão"
    }
  },
  setup () {
    let splash = useSplash();

    onMounted(() => {
      setTimeout(() => {
        splash = false
        console.log(splash)
      }, 5000)
    })

    return { splash };
  },

});
</script>