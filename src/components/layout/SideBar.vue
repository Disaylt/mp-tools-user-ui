<template>
    <div class="p-2 card-bg border-1 app-light-border shadow-2xs rounded-xl">
        <component :is="mainCategoryStore.selectedValue?.component"></component>
    </div>
</template>

<script setup lang="ts">
import { useModulesStore } from '../../store/layout/modules.store';

const mainCategoryStore = useModulesStore();

</script>