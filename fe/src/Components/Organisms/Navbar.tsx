import { ToomatoLogo } from "../Molecules/ToomatoLogo";
import { Box, Button, IconButton, SxProps, Theme } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NEUTRALS } from "../../Theme/Colors";
import { useNavigate } from "react-router-dom";

const style: SxProps<Theme> = {
    padding: "12px 8px 12px 8px",
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',
    background: NEUTRALS.WHITE,
    borderBottom: `1px solid ${NEUTRALS.B400}`
}

export const Navbar = () => {
    let navigate = useNavigate();

    return <Box sx={style}>
                    <IconButton size="large" onClick={() => navigate(-1)}>
                        <ArrowBackIcon fontSize="large" />
                    </IconButton>
                    <ToomatoLogo />
                    <IconButton size="large">
                        <AccountCircleIcon  fontSize="large" />
                    </IconButton>
            </Box>
};