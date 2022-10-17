import { BrowserRouter, Routes } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { THEME } from "../Theme/AppTheme";
import { CssBaseline } from "@mui/material";

interface Props {
    children: React.ReactNode;
}

export const ProviderWrapper = (props: Props) => {
    return (<ThemeProvider theme={THEME}>
                <CssBaseline />
                <BrowserRouter>
                    <Routes>
                        {props.children}
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>);
}