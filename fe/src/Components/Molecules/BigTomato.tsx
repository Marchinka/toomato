import {ReactComponent as TomatoColor} from "../Atoms/TomatoColor.svg"
import {ReactComponent as TomatoPaused} from "../Atoms/TomatoPaused.svg"
import {ReactComponent as TomatoInactive} from "../Atoms/TomatoInactive.svg"
// import {ReactComponent as TomatoColor} from "../Atoms/BigTomatoColor.svg"
// import {ReactComponent as TomatoPaused} from "../Atoms/BigTomatoPaused.svg"
// import {ReactComponent as TomatoInactive} from "../Atoms/BigTomatoInactive.svg"
import { styled } from "@mui/material";

const ColorLogoTomato = styled(TomatoColor)({
    height: "200px"
});

const PausedLogoTomato = styled(TomatoPaused)({
    height: "200px"
});

const InactiveLogoTomato = styled(TomatoInactive)({
    height: "200px"
});

type BigTomatoType = "color" | "paused" | "inactive";

export const BigTomato = (props: { variant: BigTomatoType }) => {
    switch (props.variant) {
        case "color":
            return <ColorLogoTomato />
        case "paused":
            return <PausedLogoTomato />
        case "inactive":
        default:
            return <InactiveLogoTomato />
    } 
}