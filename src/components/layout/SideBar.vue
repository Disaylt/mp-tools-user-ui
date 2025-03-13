<template>
    <div class="p-2 card-bg border-1 app-light-border shadow-2xs rounded-xl">
        <component :is="mainCategoryStore.selectedValue?.component"></component>
    </div>
</template>

<script setup lang="ts">
import { useMainCategoryStore } from '../../store/layout/main-category.store';

const mainCategoryStore = useMainCategoryStore();

</script>