import { mapToCollection } from 'common/mappers';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';

export const mapEmployeeSummaryFromApiToVm = (
  employeeSummary: apiModel.EmployeeSummary
): viewModel.EmployeeSummary => {
  if (!employeeSummary) {
    return null;
  }else  if (Object.keys(employeeSummary).length === 0) {
    return null;
  } else {
    return {
    id: employeeSummary.id || '',
    employeeName: employeeSummary.employeeName || ''
  }};
};


export const mapEmployeeSummaryListFromApiToVm = (
  employeeSummary: apiModel.EmployeeSummary[]
): viewModel.EmployeeSummary[] =>
  mapToCollection(employeeSummary, es => mapEmployeeSummaryFromApiToVm(es));

export const mapProjectFromApiToVm = (
  project: apiModel.Project
): viewModel.Project => {
  return Boolean(project)
    ? {
        ...project,
        employees: mapEmployeeSummaryListFromApiToVm(project.employees),
      }
    : viewModel.createEmptyProject();
};


export const mapMemberFromApiToVm = (employeeSummary: apiModel.EmployeeSummary): viewModel.EmployeeSummary => ({
  id: employeeSummary.id.toString(),
  employeeName: employeeSummary.employeeName.toString()
})