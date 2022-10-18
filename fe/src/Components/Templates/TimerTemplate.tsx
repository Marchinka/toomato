import { Box } from "@mui/material";
import React from "react";

const boxStyle = {
    paddingTop: "64px",
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    gap: "70px"
}

export const TimerTemplate = (props: {children?: React.ReactNode}) => {
    return  <Box sx={boxStyle}>
                {props.children}
            </Box>
}