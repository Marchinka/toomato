import { Box, Typography } from "@mui/material";
import { ToomatoSummary } from "../../Models/ToomatoSummary";
import { Flex } from "../../Utils/Flex";

interface Props {
    toomatoSummary: ToomatoSummary;
}

export const SummaryLine = (props: Props) => {
    return  <Flex type="space-between">
                <Typography variant="body1" sx={{fontWeight: "bold"}}>
                    {props.toomatoSummary.category.name}
                </Typography>
                <Typography variant="body2">
                    {props.toomatoSummary.toomatoCount}
                </Typography>
            </Flex>
};