import { type Member } from "~/types"

export const memberService = {

  async getByCompanyName(company: string) {
    const members  = await $fetch<Member[]>(
      `https://api.github.com/orgs/${company}/members`
    )
        
    return members
  },

  async get() {
    const members  = await $fetch<Member[]>(
      `https://api.github.com/orgs/lemoncode/members`
    )
        
    return members
  },

  async getMemberById(id: string) {
    const member = await $fetch<Member>(
      `https://api.github.com/users/${id}`
    )
    return member
  },
}