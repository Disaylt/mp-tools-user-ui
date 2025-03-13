import { defineStore, acceptHMRUpdate } from 'pinia'


export const useApplicationDarkModeStore = defineStore("appTheme", {
    state: () => ({
        isDark : true as boolean,
    }),
    actions: {
        toggle(){
            this.isDark = !this.isDark;
            document.documentElement.classList.toggle("app-dark")
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useApplicationDarkModeStore, import.meta.hot))
  }