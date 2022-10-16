import { BrowserRouter, Routes } from "react-router-dom";

interface Props {
    children: React.ReactNode;
}

export const ProviderWrapper = (props: Props) => {
    return (<BrowserRouter>
                    <Routes>
                        {props.children}
                    </Routes>
            </BrowserRouter>);
}