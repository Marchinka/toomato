import { BrowserRouter, Routes } from "react-router-dom";
import { Theme, ThemeProvider } from 'theme-ui';
import { THEME } from "../Theme/AppTheme";

interface Props {
    children: React.ReactNode;
}

export const ProviderWrapper = (props: Props) => {
    return (<ThemeProvider theme={THEME}>
                <BrowserRouter>
                    <Routes>
                        {props.children}
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>);
}