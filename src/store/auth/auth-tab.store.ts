import { defineStore, acceptHMRUpdate } from 'pinia'

export const useAuthTabStore = defineStore("authTab", {
    state: () => ({
        path : "" as string,
    }),
    actions: {
        set(path : string){
            this.path = path;
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthTabStore, import.meta.hot))
  }