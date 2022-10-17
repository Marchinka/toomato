import { Box } from "@mui/material";
import { ToomatoSummary } from "../../Models/ToomatoSummary";
import { SummaryLine } from "../Molecules/SummaryLine";

interface Props {
    summary: ToomatoSummary[];
}

export const SummaryList = (props: Props) => {
    return  <Box sx={{paddingLeft: "12px", paddingRight: "12px"}}>
                {(props.summary || []).map(summaryItem => {
                    return <SummaryLine key={summaryItem.category.id} toomatoSummary={summaryItem} />
                })}
            </Box>
};