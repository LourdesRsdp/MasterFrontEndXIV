import { memberService } from "@/services/members";

export default async function useMembersApi() {
  const members = await memberService.get();
  const totalMembers = computed(() => members.length)

  return { members,  totalMembers};
}
