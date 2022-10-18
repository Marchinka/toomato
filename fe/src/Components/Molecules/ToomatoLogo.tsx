import { Box, styled, SxProps, Theme, Typography } from "@mui/material";
import { Flex } from "../../Utils/Flex";
import {ReactComponent as TomatoColor} from "../Atoms/TomatoColor.svg"
import {ReactComponent as TomatoPaused} from "../Atoms/TomatoPaused.svg"

const LogoTomato = styled(TomatoColor)({
    height: "20px",
    marginTop: "8px"
});

const PausedLogoTomato = styled(TomatoPaused)({
    height: "20px",
    marginTop: "8px"
});


type NavbarVariant = "color" | "paused";

export const ToomatoLogo = (props: { variant: NavbarVariant }) => {
    return <Flex type="packed">
                <Typography variant="h4">T</Typography>
                {props.variant == "color" ? <LogoTomato /> : <PausedLogoTomato /> }
                {props.variant == "color" ? <LogoTomato /> : <PausedLogoTomato /> }
                <Typography variant="h4">mato</Typography>
            </Flex>
};