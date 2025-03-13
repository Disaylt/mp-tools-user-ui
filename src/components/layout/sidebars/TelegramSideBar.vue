<template>
    <div>{{ name }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = ref<string>("Telegram");

</script>

<style lang="scss"></style>