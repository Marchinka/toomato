import { ToomatoLogo } from "../Molecules/ToomatoLogo";
import { BiArrowBack, BiUserCircle } from "react-icons/bi";
import { Box, Button } from "@mui/material";

export const Navbar = () => {
    return <Box pt={"16px"} pb={"16px"} pl={"24px"} pr={"24px"}>
                    <Button><BiArrowBack/></Button>
                    <ToomatoLogo />
                    <Button><BiUserCircle /></Button>
            </Box>
};