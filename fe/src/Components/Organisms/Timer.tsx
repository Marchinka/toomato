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
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from "@mui/material";
import { TimerTemplate } from "../Templates/TimerTemplate";
import { INITIAL_TIMER_STATE, TimerState } from "../../Models/TimerState";
import { Clock } from "../Molecules/Clock";
import { DEFAULT_TOMATO_LENGTH_IN_SECONDS } from "../../Utils/Constants";
import { TomatoButton } from "../Atoms/TomatoButton";
import { timer } from "rxjs";

const buttonStyle = {
    width: "116px"
}

export const Timer = () => {
    const appStore = useAppStore();
    const [timerState, setTimerState] = useState<TimerState>({} as TimerState);

    useEffect(() => {
        let subscription = appStore.timer.subscribe((value) => setTimerState(value));
        return () => {
            subscription.unsubscribe();
            appStore.timer.change(INITIAL_TIMER_STATE);
        }
    }, []);

    switch (timerState.phase) {
        case "CategoryChoice":
            return <CategoryChoiceStep />
        case "InProgress":
            return <InProgressStep />
        case "Completed":
        default:
            return <CompletedStep/>
    }
};

export const CategoryChoiceStep = () => {
    const appStore = useAppStore();
    const [timerState, setTimerState] = useState<TimerState>({} as TimerState);

    useEffect(() => {
        let subscription = appStore.timer.subscribe((value) => setTimerState(value));
        return () => subscription.unsubscribe();
    }, []);

    const gettingReady = (selectedCategory: Category | null) => {
        if (selectedCategory != null) {
            setTimeout(() => {
                let changes: Partial<TimerState> = {
                    category: selectedCategory,
                    phase: "InProgress",
                    started: false,
                    running: false,
                    elapsedSeconds: 0
                };
                appStore.timer.change(changes);   
            }, 250);
        }
    };

    return  <Layout
                header={<Navbar variant="color"/>}
                content={<CategoryChoice onChange={category => gettingReady(category)}/>}
                footer={<></>}
            />;
};

export const InProgressStep = () => {
    const appStore = useAppStore();
    const [timerState, setTimerState] = useState<TimerState>({} as TimerState);

    useEffect(() => {
        let subscription = appStore.timer.subscribe((value) => setTimerState(value));        
        return () => {
            subscription.unsubscribe();
        }
    }, []);

    useEffect(() => {      
        let intervalId = setInterval(() => {
            if (timerState.running) {
                console.log("EMITTING", timerState.elapsedSeconds);
                let seconds = timerState.elapsedSeconds || 0;
                appStore.timer.change({ elapsedSeconds: seconds + 1});
            } else {
                console.log("EMITTING", "---stopped");
            }
        }, 1000);
        
        return () => {
            clearInterval(intervalId);
        }
    }, [timerState]);

    const play = () => {
        appStore.timer.change({
            running: true,
            started: true
        });
    }

    const stop = () => {
        appStore.timer.change({
            running: false,
            started: false,
            phase: "InProgress",
            elapsedSeconds: 0
        });
    }

    const reset = () => {
        appStore.timer.change({
            phase: "CategoryChoice",
            running: false,
            started: false
        });   
    }

    const pause = () => {
        appStore.timer.change({
            running: false,
            started: true
        });   
    }

    const onEnd = () => {
        appStore.timer.change({
            running: false,
            started: false,
            phase: "Completed",
            elapsedSeconds: 0
        });
    };

    const categoryButtonStyle = {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    };

    const getBigTomatoVariant = () => {
        if (timerState.started) {
            return timerState.running ? "color" : "paused";
        } else {
            return "inactive";
        }
    };

    const GettingReadyButtons = <>
                                    <Button variant="outlined" size="large" sx={buttonStyle}
                                        onClick={() => reset()}
                                        endIcon={<ArrowBackIcon />}
                                    >Reset</Button>
                                    <Button variant="contained" size="large" sx={buttonStyle}
                                        onClick={() => play()}
                                        endIcon={<PlayArrowIcon />}
                                    >Play</Button>
                                </>

    const RunningButtons = <>
                            <Button variant="outlined" size="large" sx={buttonStyle}
                                onClick={() => stop()}
                                endIcon={<StopIcon />}
                            >Stop</Button>
                            {timerState.running ? 
                                <Button variant="outlined" size="large" sx={buttonStyle}
                                    onClick={() => pause()}
                                    endIcon={<PauseIcon />}
                                >Pause</Button>
                                :
                                <Button variant="contained" size="large" sx={buttonStyle}
                                    onClick={() => play()}
                                    endIcon={<PlayArrowIcon />}
                                >Play</Button>
                            }
                        </>

    return  <Layout
                header={<Navbar variant={timerState.running ? "color" : "paused"}/>}
                content={<TimerTemplate>
                            <TomatoButton type={timerState.running ? "active" : "inactive"} 
                                        onClick={() => pause()} sx={categoryButtonStyle}>
                                {timerState.category?.name}
                            </TomatoButton>
                            <BigTomato variant={getBigTomatoVariant()}/>
                            {timerState.running && <Clock  elapsedSeconds={timerState.elapsedSeconds} 
                                    maxDuration={DEFAULT_TOMATO_LENGTH_IN_SECONDS}
                                    onEnd={() => onEnd()}/>}
                        </TimerTemplate>}
                footer={timerState.started ? RunningButtons : GettingReadyButtons}
            />
};


export const CompletedStep = () => {
    const appStore = useAppStore();
    const [timerState, setTimerState] = useState<TimerState>({} as TimerState);

    useEffect(() => {
        let subscription = appStore.timer.subscribe((value) => setTimerState(value));
        return () => subscription.unsubscribe();
    }, []);

    const restart = () => {
        appStore.timer.change({
            running: false,
            started: false,
            phase: "InProgress",
            elapsedSeconds: 0
        });
    };

    return  <Layout
                header={<Navbar variant="color"/>}
                content={<TimerTemplate></TimerTemplate>}
                footer={<Button variant="contained" size="large" sx={buttonStyle}
                            onClick={() => restart()}
                            endIcon={<ReplayIcon />}
                        >Restart</Button>}
            />;
};