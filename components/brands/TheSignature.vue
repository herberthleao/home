<template>
  <svg :class="styling" viewBox="0 0 264.58332 131.93686" version="1.1">
    <path
      style="
        fill: none;
        stroke: #ffffff;
        stroke-width: 2.97595;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 4;
        stroke-opacity: 1;
      "
      d="M 92.815117,96.162766 C 92.880717,115.85053 5.32496,143.28207 1.86998,123.73656 -1.2405743,106.13953 11.494897,96.849626 129.09642,36.177679 162.20708,19.682875 175.42506,15.015627 175.53649,3.7663802 c 0.12663,-12.785915 -46.44007,32.4112988 -46.44007,32.4112988 0,0 -89.49389,77.400101 -75.948867,91.912641 13.545016,14.51251 95.298887,-47.407574 95.298887,-47.407574 9.74878,-5.84927 40.33442,-39.970926 -13.06127,-6.28876 -51.307031,32.364644 -52.728828,51.761324 -48.375074,54.663844 4.353761,2.90249 37.358334,3.08009 76.916364,-37.248814 12.54555,-12.79003 -29.34724,0.97048 -29.99254,31.443794 -0.0711,3.35653 5.82973,20.01089 42.57006,-13.54501 29.63321,-27.064804 -41.63067,9.02808 -7.74001,15.48001 6.69349,1.27427 14.10987,-2.9025 18.86628,-11.61003 0,0 -8.22376,16.93129 10.15877,4.35378 C 216.17155,105.35404 259.0035,70.177496 188.114,48.271446 123.81837,28.403009 17.863302,43.333601 24.122513,54.560208 c 4.534604,8.133342 18.851435,10.166188 108.360157,12.093768 89.49405,1.92727 130.61269,13.06126 130.61269,13.06126"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    styling: {
      type: String,
      required: true
    }
  }
});
</script>

<style lang="scss">
// Styling for splash animation.
.splash-container-brand {
  @apply m-auto;
  @apply w-60;

  path {
    animation: write 5s ease infinite;
    stroke-dasharray: 1572;
    stroke-dashoffset: 1572;
  }
}

@keyframes write {
  0% {
    stroke-dashoffset: 1572;
  }

  40% {
    stroke-dashoffset: 0;
  }

  80% {
    stroke-dashoffset: -1572;
  }

  100% {
    stroke-dashoffset: -1572;
  }
}

// Styling for header logo.
.page-header-brand {
}
</style>
