import { Box, Typography } from "@mui/material";
import { ToomatoSummary } from "../../Models/ToomatoSummary";
import { Flex } from "../../Utils/Flex";
import { ToomatoStack } from "./ToomatoStack";

interface Props {
    toomatoSummary: ToomatoSummary;
}

export const SummaryLine = (props: Props) => {
    return  <Flex type="space-between" sx={{marginBottom:"12px"}}>
                <Typography variant="body1">
                    {props.toomatoSummary.category.name}
                </Typography>
                <Flex type="packed">
                    <Typography variant="body2">
                        {props.toomatoSummary.toomatoCount}
                    </Typography>
                    <Box sx={{width:"110px", marginLeft: "16px"}}>
                        <ToomatoStack count={props.toomatoSummary.toomatoCount} />
                    </Box>
                </Flex>
            </Flex> 
};