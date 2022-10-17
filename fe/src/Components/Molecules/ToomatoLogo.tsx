import { Box, styled, SxProps, Theme, Typography } from "@mui/material";
import {ReactComponent as TomatoColor} from "../Atoms/TomatoColor.svg"

const containerStyle: SxProps<Theme> = {
    display: "flex",
    justifyContent: 'flex-start',
    alignItems: 'center'
}

const LogoTomato = styled(TomatoColor)({
    height: "20px",
    marginTop: "8px"
});

export const ToomatoLogo = () => {
    return <Box sx={containerStyle}>
                <Typography variant="h4">T</Typography>
                <LogoTomato />
                <LogoTomato />
                <Typography variant="h4">mato</Typography>
            </Box>
};