import React from "react";
import { AppLayout } from "@/layouts";
import { useParams } from "react-router-dom";
import { DetailContainer } from '@/pods/detail';



export const DetailPage: React.FC = () => {
    const { id, selectedCompanyId } = useParams();

    return (
        <AppLayout>
          <DetailContainer  id={id} selectedCompanyId={selectedCompanyId} />
        </AppLayout>
      );
    };