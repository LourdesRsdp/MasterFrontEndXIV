import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  list: string;
  details: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  list: "/list",
  details: "/detail/:id/:selectedCompanyId",
};

interface Routes extends Omit<SwitchRoutes, "details"> {
  details: (id: string, selectedCompanyId: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  details: (id, selectedCompanyId) =>
    generatePath(switchRoutes.details, { id, selectedCompanyId }),
};