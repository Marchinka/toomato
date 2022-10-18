import {ReactComponent as TomatoColor} from "../Atoms/TomatoColor.svg"
import {ReactComponent as TomatoPaused} from "../Atoms/TomatoPaused.svg"
import { Button, styled } from "@mui/material";
import { useNavigate } from 'react-router-dom'; 

const ColorLogoTomato = styled(TomatoColor)({
    height: "20px"
});

const PausedLogoTomato = styled(TomatoPaused)({
    height: "20px"
});

type TomatoButtonType = "inactive" | "active";

interface Props {
    type: TomatoButtonType;
    children?: React.ReactNode;
    onClick?: () => void;
}

const InactiveTomatoStyle = {
    color: "text.secondary",
    boxShadow: "none"
};

export const TomatoButton = (props: Props) => {
    const onCLick = () => {
        if (props.onClick) props.onClick();
    };

    return <Button  variant={"outlined"}
                    size="large" 
                    sx={props.type == "active" ? null : InactiveTomatoStyle}
                    endIcon={props.type == "active" ? <ColorLogoTomato /> : <PausedLogoTomato />} 
                    onClick={() => onCLick()}>
                {props.children}
            </Button>
}