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
    height: "84px",
    width: "100vw",
    zIndex: 64
};

const contentCss = {
    marginTop: headerCss.height,
    padding: "0px 24px 0px 24px"
};

const footerCss = {
    bottom: 0,
    left: 0,
    position: "fixed",
    display:"flex", 
    height: "122px",
    width: "100vw",
    alignItems:"center", 
    justifyContent:"space-around",
    paddingLeft: "24px",
    paddingRight: "24px",
    background: "linear-gradient(180deg, rgba(225, 222, 222, 0) 0%, #E1DEDE 58.85%)"
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