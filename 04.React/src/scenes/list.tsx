import React from "react";
import { ListContainer } from '@/pods/list';
import {AppLayout} from '@/layouts';
import { useParams } from "react-router-dom";


 
export const ListPage: React.FC = () => {
  const {id} = useParams();
  return (
    <AppLayout>
      <ListContainer id='1'/>
    </AppLayout>
  );
};