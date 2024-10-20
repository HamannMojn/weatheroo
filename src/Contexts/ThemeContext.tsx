import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface ThemeContextType {
  isLightTheme: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};


const ThemeProvider = ({ children, ...props }: { children: ReactNode }) => {
    const htmlTag = document.querySelector("html");
  const [isLightTheme, setIsLightTheme] = useState(true);
  const toggleTheme = () => {
    setIsLightTheme((prevIsLightTheme) => !prevIsLightTheme);
  };
  
  useEffect(() => {
    //PicoCSS allows you to change the theme of the page by setting the "data-theme" attribute of the root html-element.
    //this hook just makes sure that all loaded pages are in sync with the state of isLightTheme
    if (htmlTag) {
      if (isLightTheme) {
        htmlTag.setAttribute("data-theme", "light");
      } else {
        htmlTag.setAttribute("data-theme", "dark");
      }
    }
  }, [htmlTag, isLightTheme]);


  return (
    <ThemeContext.Provider
      value={{
        isLightTheme,
        toggleTheme,
        ...props,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme };
