<template>
    <Dialog v-model:visible="isVisible" modal 
    :showHeader="false" 
    :draggable="false" 
    :closable="false"
    :contentStyle="{'padding' : '20px'}"
    class="max-w-7xl !bg-transparent !border-0"
    :style="{ 'box-shadow': 'none'}">
        <div v-for="category in modulesService.getCategories()">
            <div class="mt-3 mb-1 font-bold">{{ category.name }}</div>
            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-3 gap-y-2">
                <div v-for="appModule in category.modules" @click="() => moduleStore.selectedType = appModule"  class="w-full opacity-75 hover:opacity-100 shadow-lg card-bg border p-2 
                app-border rounded-xl cursor-pointer transition  duration-150 hover:scale-105">
                    <div class="text-xl underline">{{ appModule.name }}</div>
                    <div class="text-sm">{{  appModule.description }}</div>
                </div>
            </div>
        </div>
    </Dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useModulesStore } from '../../store/layout/modules.store';
import modulesService from '../../services/layout/modules.service';

const moduleStore = useModulesStore();

const isVisible = computed(() => {
    return moduleStore.selectedType == null;
})

</script>

<style lang="scss"></style>