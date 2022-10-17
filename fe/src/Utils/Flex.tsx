import { Box, SxProps, Theme } from "@mui/material";
import React from "react";

type FlexType = "space-between" | "packed";


export const Flex = (props: {type: FlexType, children: React.ReactNode, sx?: SxProps<Theme> }) => {
    switch (props.type) {
        case "space-between":
            return <Box sx={{...props.sx, display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                        {props.children}
                    </Box>
        default:
            return <Box sx={{...props.sx, display:"flex", alignItems:"center", justifyContent:"flex-start"}}>
                        {props.children}
                    </Box>
    }
}