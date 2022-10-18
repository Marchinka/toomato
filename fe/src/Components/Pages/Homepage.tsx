import { HomeSummary } from "../Organisms/HomeSummary";
import { Navbar } from "../Organisms/Navbar";
import { Layout } from "../Templates/Layout"
import {ReactComponent as TomatoColor} from "../Atoms/TomatoColor.svg"
import { Button, styled } from "@mui/material";
import { useNavigate } from 'react-router-dom'; 
import { TomatoButton } from "../Atoms/TomatoButton";

const LogoTomato = styled(TomatoColor)({
    height: "20px"
});

export const Homepage = () => {
    let navigate = useNavigate();

    return <Layout
                header={<Navbar variant="color"/>}
                content={<HomeSummary/>}
                footer={<TomatoButton type="active" onClick={() => navigate("/timer")} sx={{width: "100%"}}>
                            New Tomato
                        </TomatoButton>}
            />;
}