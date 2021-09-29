import { ThemeProvider } from 'styled-components';

// import theme from "../themes/default";
import theme from "../themes/darkTheme";
import GlobalStyles from './globals';

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;