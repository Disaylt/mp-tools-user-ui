<template>
    <div class="flex flex-row gap-1">
        <div class="grow-1 truncate">
            <Select v-model="mainCategoryStore.selectedView" :options="companies" optionLabel="name"
                optionGroupLabel="key" optionGroupChildren="values" class="w-full" :size="'small'" :loading="isLoadList"
                :disabled="isLoadList" placeholder="Компании"
                :overlay-style="{ 'max-width': '200px', 'font-size': '14px' }"
                emptyMessage="Список компаний пуст.">
                <template #optiongroup="slotProps">
                    <div class="flex items-center">
                        <div>{{ slotProps.option.key }}</div>
                    </div>
                </template>
            </Select>
        </div>
        <div class="">
            <Button @click="visibleNewCompanyModal = true" icon="pi pi-plus" aria-label="Filter"
                variant="outlined" severity="contrast" />
        </div>
    </div>

    <Dialog v-model:visible="visibleNewCompanyModal" modal header="Новая WB компания" :style="{ width: '50rem' }"
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <span class="text-surface-500 dark:text-surface-400 block mb-8">Введите основную информацию о вашей компании.</span>
        <div class="flex items-center gap-4 mb-4">
            <label for="name" class="font-semibold w-24">Название</label>
            <InputText id="name" class="flex-auto" v-model="newCompany.name" autocomplete="off" />
        </div>
        <div class="flex items-center gap-4 mb-4">
            <label for="note" class="font-semibold w-24">Заметка</label>
            <InputText id="note" class="flex-auto" v-model="newCompany.description"  autocomplete="off" />
        </div>
        <div class="flex items-center gap-4 mb-8">
            <label for="token" class="font-semibold w-24">Token</label>
            <InputText id="token" class="flex-auto" v-model="newCompany.token"   autocomplete="off" />
        </div>
        <div class="mb-2">
            <Message v-if="showNewCompanyError" severity="error">При добавлении компании произошла ошибка.</Message>
            <Message v-if="showNewCompanySuccess" severity="success">Компания успешно добавлена.</Message>
        </div>
        <div class="flex justify-end gap-2">
            <Button type="button" label="Отмена" severity="secondary" @click="visibleNewCompanyModal = false"></Button>
            <Button :loading="isLoadNewCompany" type="button" label="Добавить" @click="addNewCompany"></Button>
        </div>
    </Dialog>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useModulesStore } from '../../../../store/layout/modules.store';
import type { GroupView } from '../../../../models/common/group.model';
import type { ModuleView } from '../../../../models/layout/module.model';
import companyService from '../../../../services/panel/marketplaces/wb/seller/companies.service';
import type { NewWbSellerCompanyModel, WbSellerCompanyModel } from '../../../../models/panel/marketplaces/wb/seller/company.model';

const mainCategoryStore = useModulesStore();

const newCompany = ref<NewWbSellerCompanyModel>({
    description : "",
    name : "",
    token : ""
})

const companies = ref<GroupView<string, ModuleView>[]>([])
const isLoadList = ref<boolean>(false);
const isLoadNewCompany = ref<boolean>(false);
const showNewCompanyError = ref<boolean>(false);
const showNewCompanySuccess = ref<boolean>(false);
const visibleNewCompanyModal = ref<boolean>(false)

const addNewCompany = async () => {
    isLoadNewCompany.value = true;
    showNewCompanyError.value = false;
    showNewCompanySuccess.value = false;

    await companyService.create(newCompany.value)
        .then(resp => {

            const ownerKey = "Собственник";
            const ownerGroup = companies.value.find(x=> x.key === ownerKey);

            if(ownerGroup){
                pushToGroup(ownerGroup, resp.data);
            }
            else{
                const newOwnerGroup = addNewGroup(ownerKey);
                pushToGroup(newOwnerGroup, resp.data);
            }

            refreshNewCompany();
            showNewCompanySuccess.value = true;
        })
        .catch(() => {
            showNewCompanyError.value = true;
        })
        .finally(() => {
            isLoadNewCompany.value = false;
        })
}

const refreshNewCompany = () => {
    newCompany.value = {
        description : "",
        name : "",
        token : ""
    }
}

const addNewGroup = (key : string) : GroupView<string, ModuleView> => {
    const group = {
        key : key,
        values : []
    }

    companies
        .value
        .push(group)

    return group;
}

const pushToGroup = (group : GroupView<string, ModuleView>, comapny : WbSellerCompanyModel) => {
    group.values
        .push(
        {
            id: comapny.id, 
            name : comapny.name
        })
    }

onMounted(async () => {
})

</script>

<style lang="scss"></style>