import { defineStore, acceptHMRUpdate } from 'pinia'
import type { ProviderView } from '../../models/layout/provider.model'

export const useMainCategoryStore = defineStore("mainCategory", {
    state: () => ({
        selectedValue : null as ProviderView | null,
    }),
    actions: {
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useMainCategoryStore, import.meta.hot))
  }