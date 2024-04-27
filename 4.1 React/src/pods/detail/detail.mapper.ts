import * as vm from "./detail.vm";
import * as api from "./detail.api-model";

export const mapMemberFromApiToVm = (
  member: api.MemberDetailEntityApi
): vm.MemberDetailEntity => {

  const mappedMember: vm.MemberDetailEntity = {
    id: member.id.toString(),
    login: member.login,
    name: member.name,
    company: member.company,
    bio: member.bio,
  };


  return mappedMember;
};


export const mapMemberRickFromApiToVm = (
  member: api.MemberDetailEntityApi
): vm.MemberDetailEntity => {
  
  const mappedMember: vm.MemberDetailEntity = {
    id: member.id.toString(),
    login: member.name,
    name: member.name,
    company: member.species,
    bio: member.origin.name,
  };


  return mappedMember;
};
