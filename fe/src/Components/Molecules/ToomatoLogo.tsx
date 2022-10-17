import { Box, styled, SxProps, Theme, Typography } from "@mui/material";
import { Flex } from "../../Utils/Flex";
import {ReactComponent as TomatoColor} from "../Atoms/TomatoColor.svg"

const LogoTomato = styled(TomatoColor)({
    height: "20px",
    marginTop: "8px"
});

export const ToomatoLogo = () => {
    return <Flex type="packed">
                <Typography variant="h4">T</Typography>
                <LogoTomato />
                <LogoTomato />
                <Typography variant="h4">mato</Typography>
            </Flex>
};