<template>
    <div>{{ name }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import userService from '../../../services/auth/user.service';

const name = ref<string>("Агрегатор");


</script>

<style lang="scss"></style>