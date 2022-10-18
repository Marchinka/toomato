import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect } from "react";

interface Props {
    elapsedSeconds: number;
    maxDuration: number;
    onEnd: () => void;
}

export const Clock = (props: Props) => {
    if (props.elapsedSeconds >= props.maxDuration) {
        props.onEnd();
        return <>Completed</>;
    }

    // const loaderStyle = {
    //     border: "16px solid #f3f3f3",
    //     borderRadius: "50%",
    //     borderTop: "16px solid #3498db",
    //     width: "120px",
    //     height: "120px"
    // };

    // let progress = props.elapsedSeconds / props.maxDuration * 100;

    let minutes = String(Math.floor(props.elapsedSeconds / 60)).padStart(2, '0');
    let seconds = String(Math.floor(props.elapsedSeconds % 60)).padStart(2, '0');
    return  <>
                {/* <CircularProgress variant="determinate" value={progress}></CircularProgress> */}
                <Typography variant="h2">{minutes}:{seconds}</Typography>
            </>
};