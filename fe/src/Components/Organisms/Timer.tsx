import { useEffect, useState } from "react";
import { Category } from "../../Models/Category";
import { useAppStore } from "../../Store/AppStore";
import { BigTomato } from "../Molecules/BigTomato";
import { Layout } from "../Templates/Layout";
import { CategoryChoice } from "./CategoryChoice";
import { Navbar } from "./Navbar";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ReplayIcon from '@mui/icons-material/Replay';
import StopIcon from '@mui/icons-material/Stop';
import PauseIcon from '@mui/icons-material/Pause';
import { Button } from "@mui/material";
import { TimerTemplate } from "../Templates/TimerTemplate";

enum TimerPhase {
    CategoryChoice,
    ReadyToStart,
    InProgress,
    Completed
}

const buttonStyle = {
    width: "116px"
}

export const Timer = () => {
    const [phase, setPhase] = useState(TimerPhase.CategoryChoice);
    const [running, setRunning] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

    const gettingReady = () => setPhase(TimerPhase.ReadyToStart);

    const start = () => {
        setRunning(true);
        setPhase(TimerPhase.InProgress);
    }

    const stop = () => {
        setRunning(false);
        setPhase(TimerPhase.ReadyToStart);
    }

    const pause = () => {
        setRunning(false);
    }

    useEffect(() => {
        if (selectedCategory != null) {
            setTimeout(() => {
                gettingReady();
                setRunning(false);
            }, 250);
        }
    }, [selectedCategory]);  

    switch (phase) {
        case TimerPhase.CategoryChoice:
            return  <Layout
                        header={<Navbar variant="color"/>}
                        content={<CategoryChoice onChange={category => setSelectedCategory(category)}/>}
                        footer={<></>}
                    />;
        case TimerPhase.ReadyToStart:
            return  <Layout
                        header={<Navbar variant="color"/>}
                        content={<TimerTemplate>
                                    <BigTomato variant="inactive"/>
                                </TimerTemplate>}
                        footer={<Button variant="contained" size="large" sx={buttonStyle}
                                    onClick={() => start()}
                                    endIcon={<PlayArrowIcon />}
                                >Play</Button>}
                    />;
        case TimerPhase.InProgress:
            return  <Layout
                        header={<Navbar variant={running ? "color" : "paused"}/>}
                        content={<TimerTemplate>
                                    <BigTomato variant={running ? "color" : "paused"}/>
                                </TimerTemplate>}
                        footer={<>
                                    <Button variant="outlined" size="large" sx={buttonStyle}
                                        onClick={() => stop()}
                                        endIcon={<StopIcon />}
                                    >Stop</Button>
                                    {running ? 
                                        <Button variant="outlined" size="large" sx={buttonStyle}
                                            onClick={() => pause()}
                                            endIcon={<PauseIcon />}
                                        >Pause</Button>
                                        :
                                        <Button variant="contained" size="large" sx={buttonStyle}
                                            onClick={() => start()}
                                            endIcon={<PlayArrowIcon />}
                                        >Play</Button>
                                    }
                                </>}
                    />
        case TimerPhase.Completed:
        default:
            return  <Layout
                        header={<Navbar variant="color"/>}
                        content={<TimerTemplate></TimerTemplate>}
                        footer={<Button variant="contained" size="large" sx={buttonStyle}
                                    onClick={() => gettingReady()}
                                    endIcon={<ReplayIcon />}
                                >Restart</Button>}
                    />;
    }
};