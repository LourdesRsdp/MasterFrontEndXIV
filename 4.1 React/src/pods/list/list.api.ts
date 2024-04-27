import { NativeSelect } from '@mui/material';
import { MemberEntityApi } from './list.api-model';
import { ListComponent } from './list.component';

export const getMemberCollection = (selectedCompany) => {

  let apiUrl;
console.log("hola",typeof selectedCompany);

  switch (selectedCompany) {
  
    case "1":
      apiUrl = "https://api.github.com/orgs/lemoncode/members";
      break;
    case "2":
      apiUrl = "https://rickandmortyapi.com/api/character";
      break;
    case "3":
      apiUrl = "https://api.github.com/orgs/microsoft/members";
      break;
    default:
      console.error("Opción no reconocida");
      return;
  }

  return fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
};