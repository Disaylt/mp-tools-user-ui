import { defineStore, acceptHMRUpdate } from 'pinia'

export const useSideBarStore = defineStore("sideBar", {
    state: () => ({
        isShowStatic : true,
        isShowDraw : false,
    }),
    actions: {
        toggle(){
            if(window.innerWidth >= 768){
                this.isShowStatic = !this.isShowStatic;
            }
            else{
                this.isShowDraw = !this.isShowDraw;
            }
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useSideBarStore, import.meta.hot))
  }