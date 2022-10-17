import styled from "@emotion/styled";
import { Box } from "@mui/material";
import {ReactComponent as TomatoStack1} from "../Atoms/TomatoStack-1.svg"
import {ReactComponent as TomatoStack2} from "../Atoms/TomatoStack-2.svg"
import {ReactComponent as TomatoStack3} from "../Atoms/TomatoStack-3.svg"
import {ReactComponent as TomatoStack4} from "../Atoms/TomatoStack-4.svg"
import {ReactComponent as TomatoStack5} from "../Atoms/TomatoStack-5.svg"

interface Props {
    count: number;
}

export const ToomatoStack = (props: Props) => {
    switch (props.count) {
        case 0:
            return <Box sx={{height:"40px"}}/>
        case 1:
            return <TomatoStack1/>
        case 2:
            return <TomatoStack2/>
        case 3:
            return <TomatoStack3/>
        case 4:
            return <TomatoStack4/>
        default:
            return <TomatoStack5/>
    }
};

