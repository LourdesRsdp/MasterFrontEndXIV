import { MemberDetailEntity } from "./detail.vm";
import { getMemberDetail as getMemberDetailApi } from "./detail.api";
import { mapMemberFromApiToVm, mapMemberRickFromApiToVm } from "./detail.mapper";

export const getMemberCollection = (
  id: string,
  selectedCompanyId: string
  
): Promise<MemberDetailEntity> => {
  return new Promise<MemberDetailEntity>((resolve) => {
    getMemberDetailApi(id, selectedCompanyId).then((result) => {
      switch (selectedCompanyId) {
        case '1':

          resolve(mapMemberFromApiToVm(result));
          break;

        case '2':
          
          resolve(mapMemberRickFromApiToVm(result));
          break;

        case '3':
          
          resolve(mapMemberFromApiToVm(result));
          break;

        default:
          
          resolve(mapMemberFromApiToVm(result.results));
          
      }
    });
  });
};