import { Box, Button, Flex } from "theme-ui";
import { ToomatoLogo } from "../Molecules/ToomatoLogo";
import { BiArrowBack, BiUserCircle } from "react-icons/bi";

export const Navbar = () => {
    return <Box pt={"16px"} pb={"16px"} pl={"24px"} pr={"24px"}>
                <Flex>
                    <Button variant="transparent"><BiArrowBack/></Button>
                    <ToomatoLogo />
                    <Button variant="transparent"><BiUserCircle /></Button>
                </Flex>
            </Box>
};