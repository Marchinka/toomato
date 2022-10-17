import { ToomatoSummary } from "../../Models/ToomatoSummary";
import { SummaryLine } from "../Molecules/SummaryLine";

interface Props {
    summary: ToomatoSummary[];
}

export const SummaryList = (props: Props) => {
    return  <>
                {(props.summary || []).map(summaryItem => <SummaryLine key={summaryItem.category.id} toomatoSummary={summaryItem} />)}
            </>
};