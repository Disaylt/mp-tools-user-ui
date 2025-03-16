import { defineStore, acceptHMRUpdate } from 'pinia'
import type { IdentityDetails } from '../../models/auth/user.model';

export const useUserStore = defineStore("user", {
    state: () => ({
        user : null as null | IdentityDetails
    }),
    actions: {
        set(value : IdentityDetails){
            this.user = value;
        },
        clear(){
            this.user = null;
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
  }