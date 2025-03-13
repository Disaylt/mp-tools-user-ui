<template>
    <div>
        <Header></Header>
    </div>
    <div class="main flex flex-row flex-wrap">
        <div v-if="sideBarStore.isShowStatic && mainCategoryStore.selectedValue !== null" 
        class="side-bar hidden md:block fadeinleft animation-duration-100 overflow-auto main p-2">
            <div class="border-round-xl">
                <SideBar></SideBar>
            </div>
        </div>
        <div class="flex-grow-1 main overflow-auto">
            <div class="body p-2">
                <RouterView />
            </div>
            <div class="footer">
                <router-link to="/login">Home</router-link>
            </div>
        </div>
    </div>
    <Drawer v-model:visible="sideBarStore.isShowDraw" header="Меню">
        <SideBar></SideBar>
    </Drawer>
</template>

<script setup lang="ts">
import { useMainCategoryStore } from '../store/main-category.store';
import { useSideBarStore } from '../store/side-bar.store';
import Header from './layout/Header.vue'
import SideBar from './layout/SideBar.vue';

const sideBarStore = useSideBarStore();
const mainCategoryStore = useMainCategoryStore();

</script>

<style lang="scss">
.body {
    min-height: calc(100vh - 110px);
}

.header {
    height: 60px;
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