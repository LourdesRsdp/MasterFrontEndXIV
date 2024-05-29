import { defineStore } from 'pinia'
import type { Member } from '~~/types';

export const useMemberListStore = defineStore('cart', {
  state: () => ({
    items: {} as Member[],
    
    org: 'lemoncode' as string,
  }),
  getters: {
    allItems: (state) => state.items,
    getOrg: (state) => state.org
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