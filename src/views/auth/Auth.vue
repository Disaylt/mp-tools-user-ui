<template>
    <div class="h-screen flex flex-col justify-center items-center overflow-auto">
        <div>
            <Button @click="appDarkModeStore.toggle()" :icon="appDarkModeStore.isDark ? 'pi pi-moon' : 'pi pi-sun'"
            aria-label="Filter" variant="text" severity="contrast" />
            <div style="width: 300px; height: 500px;" class="flex flex-col card-bg my-1 rounded-xl border-1 app-light-border shadow-xs">
                <Tabs v-model:value="authTabStore.path" class="mb-2" scrollable>
                    <TabList class="rounded-xl">
                        <Tab @click="router.push(tab.route)" class="w-1/2" v-for="tab in items" :key="tab.key" :value="tab.route">{{ tab.title }}</Tab>
                    </TabList>
                </Tabs>
                <RouterView />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import authTabService from "../../services/auth/auth-tab.service";
import { useApplicationDarkModeStore } from "../../store/layout/application-dark-model.store";
import { useAuthTabStore } from "../../store/auth/auth-tab.store";

const appDarkModeStore = useApplicationDarkModeStore();
const router = useRouter();
const authTabStore = useAuthTabStore();

const items = authTabService.getCategories();
authTabStore.set(router.currentRoute.value.fullPath)

</script>

<style lang="scss"></style>