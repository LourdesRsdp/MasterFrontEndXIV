import React from "react";
import { mapProjectFromApiToVm, mapEmployeeSummaryFromApiToVm, mapEmployeeSummaryListFromApiToVm } from "./project.mapper";
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';


describe('project mapper component specs', () => {
    it('should map employee summary from API to view model', () => {

        // Arrange
        const apiEmployeeSummary: apiModel.EmployeeSummary = { id: "123", employeeName: "John" };
        const expectedVmEmployeeSummary: viewModel.EmployeeSummary = { id: "123", employeeName: "John" };

        // Act
        const result = mapEmployeeSummaryFromApiToVm(apiEmployeeSummary);

        // Assert
        expect(result).toEqual(expectedVmEmployeeSummary);
    });

    it('should map employee summary list from API to view model', () => {

        // Arrange
        const apiEmployeeSummaryList: apiModel.EmployeeSummary[] = [{ id: "1", employeeName: "John" }, { id: "2", employeeName: "Doe" }];
        const expectedVmEmployeeSummaryList: viewModel.EmployeeSummary[] = [{ id: "1", employeeName: "John" }, { id: "2", employeeName: "Doe" }];

        // Act
        const result = mapEmployeeSummaryListFromApiToVm(apiEmployeeSummaryList);

        // Assert
        expect(result).toEqual(expectedVmEmployeeSummaryList);
    });

    it('should map project from API to view model', () => {

        // Arrange
        const EmployeeSummary: apiModel.EmployeeSummary[] = [{ id: "1", employeeName: "John" }, { id: "2", employeeName: "Doe" }];

        const apiProject: apiModel.Project = {
            id: "1",
            name: "Lemoncode",
            externalId: "1",
            comments: "0110",
            isActive: true,
            employees: EmployeeSummary
        };

        const expectedVmProject: viewModel.Project = {
            id: "1",
            name: "Lemoncode",
            externalId: "1",
            comments: "0110",
            isActive: true,
            employees: EmployeeSummary
        };


        // Act
        const result = mapProjectFromApiToVm(apiProject);

        // Assert
        expect(result).toEqual(expectedVmProject);
    });

    it('should return empty project view model if API project is falsy', () => {

        // Arrange
        const apiProject: apiModel.Project = null;


        // Act
        const result = mapProjectFromApiToVm(apiProject);

        // Assert
        expect(result).toEqual(viewModel.createEmptyProject());

    });

    it('should return empty array when mapEmployeeSummaryListFromApiToVm feeds collectio equals undefined', () => {

        // Arrange
        const apiEmployeeSummaryList: apiModel.EmployeeSummary[] = undefined;
        const expectedVmEmployeeSummaryList: viewModel.EmployeeSummary[] = [];

        // Act
        const result = mapEmployeeSummaryListFromApiToVm(apiEmployeeSummaryList);

        // Assert
        expect(result).toEqual(expectedVmEmployeeSummaryList);

    });

    it('should return null when mapEmployeeSummaryFromApiToVm feeds collectio equals undefined', () => {

        // Arrange
        const apiEmployeeSummary: apiModel.EmployeeSummary = undefined;
        const expectedVmEmployeeSummary: viewModel.EmployeeSummary = null;

        // Act
        const result = mapEmployeeSummaryFromApiToVm(apiEmployeeSummary);

        // Assert
        expect(result).toEqual(expectedVmEmployeeSummary);

    });

});
