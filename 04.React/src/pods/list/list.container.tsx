import React from "react";
import { ListComponent } from "./list.component";
import { MemberEntity } from "./list.vm";
import { getMemberCollection } from './list.repository';
import { CompanyContextProvider } from "../../core/context/CompanyContext";

interface Props {
  id: string;
}

export const ListContainer: React.FC<Props> = (props) => {
  const { id } = props;
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  
  React.useEffect(() => {
    getMemberCollection(id).then(
      (memberCollection : MemberEntity[]) => setMembers(memberCollection)
    );
  }, [id]);

  

  return (
    <CompanyContextProvider><ListComponent members={members} /></CompanyContextProvider>
  );
};