<template>
    <div class="header flex flex-row px-2 border-b-1 border-slate-300 app-dark:border-slate-600">
        <div class="flex items-center gap-1" style="width: 230px;">
            <div class="flex-none">
                <Button :disabled="mainCategoryStore.selectedValue === null" 
                @click="sideBarStore.toggle()"
                :icon="sideBarStore.isShowStatic ? 'pi pi-bars' : 'pi pi-ellipsis-v'"
                aria-label="Filter" 
                variant="outlined" 
                severity="secondary"
                size="large" />
            </div>
            <FloatLabel class="w-full md:w-56" variant="on">
                <Select :fluid="true" v-model="mainCategoryStore.selectedValue" :options="categories" optionLabel="name"
                style="max-width: 200px;" 
                :overlay-style="{ 'max-width' : '100vw'}" />
                <label for="on_label">Категория</label>
            </FloatLabel>
        </div>
        <div class="flex flex-grow-1 flex flex-row-reverse items-center gap-1">
            <div class="hidden md:block">
                <div class="flex flex-row gap-1">
                    <Chip class="overflow-hidden">
                        <i class="pi pi-wallet" style="font-size: 1rem"></i>
                        <label class="overflow-hidden text-overflow-clip">{{ getMoneyAsCurrencyString }}</label>
                        <label>р.</label>
                    </Chip>
                    <Button rounded @click="applicationDarkModeStore.toggle()" :icon="applicationDarkModeStore.isDark ? 'pi pi-moon' : 'pi pi-sun'"
                        aria-label="Filter" variant="outlined" severity="secondary" />
                    <Button icon="pi pi-bell" aria-label="Filter" rounded  variant="outlined" severity="secondary" />
                    <Button @click="pushToProfile()" icon="pi pi-user" rounded  aria-label="Filter" variant="outlined" severity="secondary" />
                </div>
            </div>
            <div class="flex flex-row gap-1 block md:hidden">
                <Button @click="applicationDarkModeStore.toggle()"  rounded :icon="applicationDarkModeStore.isDark ? 'pi pi-moon' : 'pi pi-sun'"
                aria-label="Filter" variant="outlined" severity="secondary" />
                <Button rounded  @click="openMenu($event)" icon="pi pi-ellipsis-v" aria-label="Filter" variant="outlined"
                    severity="secondary" />
                <Popover ref="smallMenu">
                    <div class="flex flex-column gap-2">
                        <Chip class="flex justify-content-center  overflow-hidden w-full">
                            <i class="pi pi-wallet" style="font-size: 1rem"></i>
                            <label class="overflow-hidden text-overflow-clip">{{ getMoneyAsCurrencyString }}</label>
                            <label>р.</label>
                        </Chip>
                        <Button type="button" label="Уведомления" icon="pi pi-bell" badge="99+"  />
                        <Button @click="pushToProfile()" type="button" label="Профиль" icon="pi pi-user" />
                    </div>
                </Popover>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useMainCategoryStore } from '../../store/main-category.store';
import type { PopoverMethods } from 'primevue';
import { computed, ref } from 'vue';
import { useSideBarStore } from '../../store/side-bar.store';
import type { MainCategoryView } from '../../models/category.model';
import mainCategoryService from '../../services/main-category.service';
import { useApplicationDarkModeStore } from '../../store/application-dark-model.store';

const router = useRouter();
const mainCategoryStore = useMainCategoryStore();
const sideBarStore = useSideBarStore();
const applicationDarkModeStore = useApplicationDarkModeStore();

const smallMenu = ref<PopoverMethods | null>(null);
const categories = ref<MainCategoryView[]>(mainCategoryService.getCategories());
const money = ref<number>(0);

const getMoneyAsCurrencyString  = computed(() => {
  return money.value.toLocaleString('ru');
})


const openMenu = (event: Event) => {
  smallMenu.value?.toggle(event);
};

const pushToProfile = () => {
  router.push('/panel/profile');
};

</script>

<style scoped lang="scss">
.brand-column {
  width: 250px;
}

.header{
    background: var(--surface-card);
}
</style>