import * as vm from "./list.vm";
import * as api from "./list.api-model";

export const mapMemberLemonFromApiToVm = (
  member: api.MemberEntityApi
): vm.MemberEntity => ({
  id: member.id.toString(),
  login: member.login,
  avatar_url: member.avatar_url,
  routing: member.login
});

export const mapMemberRickFromApiToVm = (
  member: api.MemberEntityApi
): vm.MemberEntity => {
  const mappedMember = {
    id: member.id.toString(),
    login: member.name.toString(),
    avatar_url: member.image,
    routing: member.id.toString()
  };


  return mappedMember;
};

export const mapMemberLemonCollectionFromApiToVm = (
  memberCollection: api.MemberEntityApi[]
): vm.MemberEntity[] =>
  memberCollection.map((member) => mapMemberLemonFromApiToVm(member));

export const mapMemberRickCollectionFromApiToVm = (
  memberCollection: api.MemberEntityApi[]
): vm.MemberEntity[] =>
  memberCollection.map((member) => mapMemberRickFromApiToVm(member));

export const mapMemberMicroCollectionFromApiToVm = (
  memberCollection: api.MemberEntityApi[]
): vm.MemberEntity[] =>
  memberCollection.map((member) => mapMemberLemonFromApiToVm(member));