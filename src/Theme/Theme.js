import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import useLocalStorage from '../Hooks/UseLocalStorage';

const theme = createMuiTheme({
    palette: {
        type: "light",
        primary: green, 
        secondary: red,

    }
});

const themeDark = createMuiTheme({
    palette: {
        type: "dark",
        primary: green,
        secondary: red,
        
    }
});

const Theme = (props) => {
    const { children, darkMode } = props;
    const defaultTheme = darkMode ? themeDark : theme;

    return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
}

export const withTheme = (Component) => {

    return (props) => {
        const [ darkMode, setDarkMode ] = useLocalStorage("darkMode", false);
        return (
            <Theme darkMode={darkMode}>
                <Component {...props} darkMode={darkMode} setDarkMode={setDarkMode} />
            </Theme>
        )
    };
};