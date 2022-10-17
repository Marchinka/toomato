import {ReactComponent as TomatoColor} from "../Atoms/TomatoColor.svg"
import { Button, styled } from "@mui/material";
import { useNavigate } from 'react-router-dom'; 

const LogoTomato = styled(TomatoColor)({
    height: "20px"
});

type TomatoButtonType = "inactive" | "active";

interface Props {
    type: TomatoButtonType;
    children: React.ReactNode;
    onClick: () => void;
}

export const TomatoButton = (props: Props) => {
    return <Button variant="outlined" size="large" endIcon={<LogoTomato />} onClick={() => props.onClick()}>
                {props.children}
            </Button>
}