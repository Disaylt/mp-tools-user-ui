<template>
    <Dialog v-model:visible="isVisible" modal :showHeader="false" :draggable="false" :closable="false" :style="{ width: '25rem' }">
        <div class="grid md:grid-cols-2 grid-cols-1 gap-2">
            <div>01</div>
            <div>02</div>
            <div>03</div>
            <div>04</div>
            <div>05</div>
            <div>06</div>
            <div>07</div>
        </div>
    </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useModulesStore } from '../../store/layout/modules.store';
const moduleStore = useModulesStore();

const isVisible = ref<boolean>(moduleStore.selectedValue == null)

</script>

<style lang="scss"></style>