<template>
    <div>
        <Header></Header>
    </div>
    <div class="main flex flex-row flex-wrap">
        <div v-if="sideBarStore.isShowStatic && mainCategoryStore.selectedValue !== null" 
        class="side-bar hidden md:block overflow-auto main p-2 transition-opacity duration-300 ease-in">
            <div class="border-round-xl">
                <SideBar></SideBar>
            </div>
        </div>
        <div class="flex-grow-1 main overflow-auto">
            <div class="body p-2">
                <div v-for="n in 5" class="my-3">{{ n }}</div>
                <RouterView />
            </div>
            <div class="footer mx-2 border-t-1 border-x-1 app-light-border card-bg rounded-t-lg">
                <Footer></Footer>
            </div>
        </div>
    </div>
    <Drawer v-model:visible="sideBarStore.isShowDraw" header="Меню">
        <component :is="mainCategoryStore.selectedValue?.component"></component>
    </Drawer>
</template>

<script setup lang="ts">
import { useMainCategoryStore } from '../store/layout/main-category.store';
import { useSideBarStore } from '../store/layout/side-bar.store';
import Header from './layout/Header.vue'
import SideBar from './layout/SideBar.vue';
import Footer from './layout/Footer.vue';

const sideBarStore = useSideBarStore();
const mainCategoryStore = useMainCategoryStore();

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