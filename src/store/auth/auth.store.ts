import { defineStore, acceptHMRUpdate } from 'pinia'

export const useAuthStore = defineStore("auth", {
    state: () => ({
        wasRefresh : false as boolean,
        refreshToken : null as string | null,
        accessToken : null as string | null
    }),
    actions: {
        clear(){
            this.refreshToken = null;
            this.accessToken = null;
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
  }