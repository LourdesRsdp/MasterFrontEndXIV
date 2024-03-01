import { MemberEntity } from "./list.vm";
import { getMemberCollection as getMemberCollectionApi } from "./list.api";
import { mapMemberLemonCollectionFromApiToVm, mapMemberRickCollectionFromApiToVm, mapMemberMicroCollectionFromApiToVm } from "./list.mapper";

export const getMemberCollection = (id: string): Promise<MemberEntity[]> => {
  return new Promise<MemberEntity[]>((resolve) => {
    console.log(id);
    
    getMemberCollectionApi(id).then((result) => {
      switch (id) {
        case '1':

          resolve(mapMemberLemonCollectionFromApiToVm(result));
          break;

        case '2':
          resolve(mapMemberRickCollectionFromApiToVm(result.results));
          break;

        case '3':
          resolve(mapMemberMicroCollectionFromApiToVm(result));
          break;

        default:
          resolve(mapMemberRickCollectionFromApiToVm(result.results));
      }
    });
  });
};