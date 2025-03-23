<template>
    <div>
        <Header></Header>
    </div>
    <div class="main flex flex-row flex-wrap">
        <div v-if="sideBarStore.isShowStatic && mainCategoryStore.selectedType !== null" 
        class="side-bar hidden md:block overflow-auto main p-2">
            <div class="border-round-xl">
                <SideBar></SideBar>
            </div>
        </div>
        <div class="flex-grow-1 main overflow-auto">
            <div class="body p-2">
                <RouterView />
            </div>
            <div class="footer mx-2 border-t-1 border-x-1 app-light-border card-bg rounded-t-lg">
                <Footer></Footer>
            </div>
        </div>
    </div>
    <Drawer v-model:visible="sideBarStore.isShowDraw" header="Меню">
        <component :is="mainCategoryStore.selectedType?.component" class="py-2"></component>
    </Drawer>
    <ModulesModal></ModulesModal>
</template>

<script setup lang="ts">
import { useModulesStore } from '../../store/layout/modules.store';
import { useSideBarStore } from '../../store/layout/side-bar.store';
import Header from './Header.vue'
import SideBar from './SideBar.vue';
import Footer from './Footer.vue';
import ModulesModal from '../panel/ModulesModal.vue';

const sideBarStore = useSideBarStore();
const mainCategoryStore = useModulesStore();

</script>

<style lang="scss">
.body {
    min-height: calc(100vh - 110px);
}

.footer {
    height: 50px;
}

.main {
    height: calc(100vh - 60px);
}

.side-bar {
    width: 250px;
}
</style>