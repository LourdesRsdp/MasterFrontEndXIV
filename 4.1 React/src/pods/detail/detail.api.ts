import { MemberDetailEntityApi } from "./detail.api-model";
import { ListComponent } from "../list/list.component";

export const getMemberDetail = (characterId: string, selectedCompanyId: string) => {

  if (selectedCompanyId === "2") {
    return fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then((response) => response.json())
      .then((data) => {
        return data;
      });

  }else {
    return fetch(`https://api.github.com/users/${characterId}`).then((response) =>
    response.json()
  );
  }
}