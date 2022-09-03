import React, { ReactElement } from "react";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";
// import AppLocale from "shared/localization";
import { useThemeContext } from "../app-context-provider/ThemeContextProvider";
// import { useLocaleContext } from "../app-context-provider/LocaleContextProvide";

interface AppThemeProviderProps {
  children: ReactElement;
}

const AppThemeProvider: React.FC<AppThemeProviderProps> = (props) => {
  const { theme } = useThemeContext();
  // const { locale } = useLocaleContext();
  // const { muiLocale } = AppLocale[locale.locale];

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={createTheme(theme)}>
        {props.children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default AppThemeProvider;
