import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TemperatureContextType {
    isCelsius: boolean;
    toggleTemperatureUnit: () => void;
  }
const TemperatureContext = createContext<TemperatureContextType | undefined>(undefined);

//Lets components within the context provider get the state of the context
const useTemperature = () => {
    const context = useContext(TemperatureContext);
    if (!context) {
      throw new Error("useTemperature must be used within a TemperatureProvider");
    }
    return context;
  };


//Setup hooks and toogle methods for ContextProvider
const TemperatureProvider = ({ children, ...props }: { children: ReactNode }) => {
  const [isCelsius, setIsCelsius] = useState(true);
  const toggleTemperatureUnit = () => {
    setIsCelsius(prevIsCelsius => !prevIsCelsius);
  };
    return (
        <TemperatureContext.Provider
          value={{
            isCelsius,
            toggleTemperatureUnit,
            ...props,
          }}
        >
          {children}
        </TemperatureContext.Provider>
      );
}

export {TemperatureProvider, useTemperature};