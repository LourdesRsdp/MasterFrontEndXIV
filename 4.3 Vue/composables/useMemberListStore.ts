import { defineStore } from 'pinia'
import type { Member } from '~~/types';

export const useMemberListStore = defineStore('cart', {
  state: () => ({
    items: {} as Member[],
    
    org: {} as string,
  }),
  getters: {
    allItems: (state) => Object.values(state.items),
    getOrg: (state) => Object.values(state.org)
  },
  actions: {
    setItems(items: Member[]) {
      this.items = items;
    },
    setOrg(org: string) {
      this.org = org;
    },
  },
})