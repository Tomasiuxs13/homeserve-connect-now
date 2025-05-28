
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SearchContextType {
  searchTerm: string;
  selectedCity: string;
  setSearchTerm: (term: string) => void;
  setSelectedCity: (city: string) => void;
  resetSearch: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const resetSearch = () => {
    setSearchTerm("");
    setSelectedCity("");
  };

  return (
    <SearchContext.Provider 
      value={{
        searchTerm,
        selectedCity,
        setSearchTerm,
        setSelectedCity,
        resetSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
