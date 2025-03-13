<template>
    <div class="flex flex-column gap-2 p-2">
        <component :is="mainCategoryStore.selectedValue?.component"></component>
    </div>
</template>

<script setup lang="ts">
import { useMainCategoryStore } from '../../store/main-category.store';

const mainCategoryStore = useMainCategoryStore();

</script>