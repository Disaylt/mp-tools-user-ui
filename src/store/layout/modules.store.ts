import { defineStore, acceptHMRUpdate } from 'pinia'
import type { ModuleType, ModuleView } from '../../models/layout/module.model'

export const useModulesStore = defineStore("mainCategory", {
    state: () => ({
        selectedType : null as ModuleType | null,
        selectedView : null as ModuleView | null
    }),
    actions: {
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useModulesStore, import.meta.hot))
  }