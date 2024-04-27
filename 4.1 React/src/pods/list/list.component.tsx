import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormControl, InputLabel, NativeSelect } from '@mui/material';
import { getMemberCollection } from './list.repository';
import { useCompanyContext, CompanyContext } from '../../core/context/CompanyContext'; //import usecontext @react
import { routes } from '@/core';
import { MemberEntity } from './list.vm';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import css from './list.styles.css'


interface Props {
  members: MemberEntity[];
}

export const ListComponent: React.FC<Props> = (props) => {
  const { selectedCompany, setSelectedCompany } = React.useContext(CompanyContext);//react hook usecontext
  
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const navigate = useNavigate();

  const handleCompanyChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedCompany(event.target.value as string);
    console.log(event.target.value)
  };

  useEffect(() => {
    if (selectedCompany) {
      getMemberCollection(selectedCompany).then((memberCollection: MemberEntity[]) =>
        setMembers(memberCollection)
      );
    }
  }, [selectedCompany]);

  return (
    <>
      <h2>Company List</h2>
      <FormControl>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Select Company
        </InputLabel>
        <NativeSelect value={selectedCompany} onChange={handleCompanyChange}>
          <option value={'1'}>LemonCode</option>
          <option value={'2'}>Rick and Morty</option>
          <option value={'3'}>Microsoft</option>
        </NativeSelect>
      </FormControl>
      <List>
        {members.map((member) => (
          <React.Fragment key={member.id}>
            <ListItem disablePadding>
              <ListItemButton
                role={undefined}
                onClick={() => navigate(routes.details(member.routing, selectedCompany))}
                dense
              >
                <ListItemAvatar>
                  <Avatar alt={member.login} src={member.avatar_url} />
                </ListItemAvatar>
                <ListItemText
                  primary={member.login}
                  secondary={<Typography>{member.id}</Typography>}
                />
              </ListItemButton>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </>
  );
};