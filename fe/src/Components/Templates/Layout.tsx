import { Box, useTheme } from "@mui/material";
import { NEUTRALS } from "../../Theme/Colors";

interface Props {
    header: React.ReactNode;
    content: React.ReactNode;
    footer?: React.ReactNode;
}

const headerCss = {
    top: 0,
    left: 0,
    position: "fixed",
    height: "64px",
    width: "100vw",
    zIndex: 64
};

const contentCss = {
    marginTop: headerCss.height
};

const footerCss = {
    bottom: 0,
    left: 0,
    position: "fixed"
};

export const Layout = (props: Props) => {
    const theme = useTheme();

    return  <Box>
                <Box sx={headerCss}>
                    {props.header}
                </Box>
                <Box sx={contentCss}>
                    {props.content}
                </Box>
                {props.footer && <Box sx={footerCss}>
                    {props.footer}
                </Box>}
            </Box>
};