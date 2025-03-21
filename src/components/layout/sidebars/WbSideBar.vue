<template>
    <div class="flex flex-row gap-1">
        <div class="grow-1 truncate">
            <Select v-model="mainCategoryStore.selectedView" :options="companies" 
                optionLabel="name" 
                optionGroupLabel="key" 
                optionGroupChildren="values" 
                class="w-full"
                :size="'small'"
                :loading="isLoad"
                :disabled="isLoad"
                placeholder="Компании"
                :overlay-style="{ 'max-width' : '200px', 'font-size': '14px'}">
                    <template #optiongroup="slotProps">
                        <div class="flex items-center">
                            <div>{{ slotProps.option.key }}</div>
                        </div>
                    </template>
                </Select>
        </div>
        <div class="">
                <Button :disabled="isLoad" 
                icon="pi pi-plus"
                aria-label="Filter" 
                variant="outlined" 
                severity="contrast" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useModulesStore } from '../../../store/layout/modules.store';
import type { GroupView } from '../../../models/common/group.model';
import type { ModuleView } from '../../../models/layout/module.model';
import companyService from '../../../services/panel/marketplaces/wb/seller/companies.service';

const mainCategoryStore = useModulesStore();

const companies = ref<GroupView<string, ModuleView>[]>([])
const isLoad = ref<boolean>(false);

onMounted(async () => {
    isLoad.value = true;

    await companyService.getMenu()
        .then((resp) => {
            companies.value = resp.data;
        })
        .finally(() => {
            isLoad.value = false;
        });
})

</script>

<style lang="scss"></style>