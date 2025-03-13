import { defineStore, acceptHMRUpdate } from 'pinia'
import type { MainCategoryView } from '../models/category.model'

export const useMainCategoryStore = defineStore("mainCategory", {
    state: () => ({
        selectedValue : null as MainCategoryView | null,
    }),
    actions: {
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useMainCategoryStore, import.meta.hot))
  }