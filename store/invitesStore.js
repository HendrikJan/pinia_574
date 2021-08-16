import { defineStore } from 'pinia'

export const useInvitesStore = defineStore({
  id: 'storeId',

  state() {
    return {
      invites: [{
        id: 1,
        name: "Johnny"
      }],
      loading: true,
    }
  },
})
