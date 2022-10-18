import { Box } from "@mui/material";
import React from "react";

const boxStyle = {
    paddingTop: "32px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "70px"
}

export const TimerTemplate = (props: {children?: React.ReactNode}) => {
    return  <Box sx={boxStyle}>
                {props.children}
            </Box>
}