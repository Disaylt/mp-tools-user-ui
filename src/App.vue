<script setup lang="ts">
import { usePrimeVue } from 'primevue';
import { onMounted } from 'vue';

const primevue = usePrimeVue();

onMounted(() => {
  primevue.config.ripple = true;
});

</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
