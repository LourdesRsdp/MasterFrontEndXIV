import React, { createContext, useContext, ReactNode, useState } from 'react';

interface CompanyContextProps {
  children: ReactNode;
}

interface CompanyContextValue {
  selectedCompany: string;
  setSelectedCompany: (value: string) => void;
}

const DefaultCompany = '1';

export const CompanyContext = createContext<CompanyContextValue>({
  selectedCompany: DefaultCompany,
  setSelectedCompany: (value) => {}
});

export const CompanyContextProvider: React.FC<CompanyContextProps> = (props) => {
  const [selectedCompany, setSelectedCompany] = useState(DefaultCompany);
  
  return (
    <CompanyContext.Provider value={{selectedCompany, setSelectedCompany}}>
      {props.children}
    </CompanyContext.Provider>
  );
};

export const useCompanyContext = (): CompanyContextValue => {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error('useCompanyContext must be used within a CompanyProvider');
  }
  return context;
};

/* import React, { createContext, useContext, ReactNode, useState } from 'react';

interface CompanyContextProps {
  children: ReactNode;
}

interface CompanyContextValue {
  selectedCompany: string;
  setSelectedCompany: (value: string) => void;
}

const CompanyContext = createContext<CompanyContextValue | undefined>(undefined);

export const CompanyProvider: React.FC<CompanyContextProps> = ({ children }) => {
  const [selectedCompany, setSelectedCompany] = useState<string>('1');

  return (
    <CompanyContext.Provider value={{ selectedCompany, setSelectedCompany }}>
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompanyContext = (): CompanyContextValue => {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error('useCompanyContext must be used within a CompanyProvider');
  }
  return context;
};
 */