import { BrowserRouter, Routes } from "react-router-dom";
import { Theme, ThemeProvider } from 'theme-ui';

export const theme: Theme = {
    fonts: {
      body: 'system-ui, sans-serif',
      heading: '"Avenir Next", sans-serif',
      monospace: 'Menlo, monospace',
    },
    colors: {
      text: '#000',
      background: '#fff',
      primary: 'tomato',
    },
}

interface Props {
    children: React.ReactNode;
}

export const ProviderWrapper = (props: Props) => {
    return (<ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        {props.children}
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>);
}