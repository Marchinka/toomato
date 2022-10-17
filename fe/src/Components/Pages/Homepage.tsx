import { HomeSummary } from "../Organisms/HomeSummary";
import { Navbar } from "../Organisms/Navbar";
import { Layout } from "../Templates/Layout"
import {ReactComponent as TomatoColor} from "../Atoms/TomatoColor.svg"
import { Button, styled } from "@mui/material";

const LogoTomato = styled(TomatoColor)({
    height: "20px"
});

export const Homepage = () => {
    return <Layout
                header={<Navbar/>}
                content={<HomeSummary/>}
                footer={<Button variant="outlined" size="large" endIcon={<LogoTomato />}>
                            New Tomato
                        </Button>}
            />;
}