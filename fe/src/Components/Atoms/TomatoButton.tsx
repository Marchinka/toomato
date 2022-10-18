import {ReactComponent as TomatoColor} from "../Atoms/TomatoColor.svg"
import {ReactComponent as TomatoPaused} from "../Atoms/TomatoPaused.svg"
import { Button, styled, SxProps, Theme } from "@mui/material";

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
    sx?: SxProps<Theme>;
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
                    sx={props.type == "active" ? props.sx : {...props.sx, ...InactiveTomatoStyle}}
                    endIcon={props.type == "active" ? <ColorLogoTomato /> : <PausedLogoTomato />} 
                    onClick={() => onCLick()}>
                {props.children}
            </Button>
}