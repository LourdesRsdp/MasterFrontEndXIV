import React from "react";
import { Link } from "react-router-dom";
import { routes } from "core";
import { MemberDetailEntity } from "./detail.vm";
import { useCompanyContext } from "../../core/context/CompanyContext";

interface Props {
  member: MemberDetailEntity;
}

export const DetailComponent: React.FC<Props> = (props) => {
  const { member } = props;
  const { selectedCompany } = useCompanyContext();
  return (
    <>
      <h2>Hello from Detail page</h2>
      <p> id: {member.id}</p>
      <p> login: {member.login}</p>
      <p> name: {member.name}</p>
      <p> company: {member.company}</p>
      <p> bio: {member.bio}</p>
      <Link to="/list">Back to list page</Link>
    </>
  );
};