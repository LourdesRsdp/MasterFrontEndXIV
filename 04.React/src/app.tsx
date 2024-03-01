import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RouterComponent } from "@/core";
import { ProfileProvider } from "@/core/profile";
import { CompanyContextProvider } from "./core/context/CompanyContext";

export const App = () => {
  return (
    <CompanyContextProvider>
      <ProfileProvider>
        <RouterComponent />
      </ProfileProvider>
    </CompanyContextProvider>
  );
};

//importar mi contexto: import companycontext
//envolver profileprovider con el companyrpvider
