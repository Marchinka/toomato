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
        case "ReadyToStart":
            return <ReadyToStartStep />
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
                    phase: "ReadyToStart",
                    running: true
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


export const ReadyToStartStep = () => {
    const appStore = useAppStore();
    const [timerState, setTimerState] = useState<TimerState>({} as TimerState);

    useEffect(() => {
        let subscription = appStore.timer.subscribe((value) => setTimerState(value));
        return () => subscription.unsubscribe();
    }, []);

    const reset = () => {
        appStore.timer.change(INITIAL_TIMER_STATE);
    };

    const start = () => {
        appStore.timer.change({
            running: true,
            phase: "InProgress"
        });
    }

    return  <Layout
                header={<Navbar variant="color"/>}
                content={<TimerTemplate>
                            <BigTomato variant="inactive"/>
                        </TimerTemplate>}
                footer={<>
                            <Button variant="outlined" size="large" sx={buttonStyle}
                                onClick={() => reset()}
                                endIcon={<ArrowBackIcon />}
                            >Reset</Button>
                            <Button variant="contained" size="large" sx={buttonStyle}
                                onClick={() => start()}
                                endIcon={<PlayArrowIcon />}
                            >Play</Button>
                        </>}
            />;
};


export const InProgressStep = () => {
    const appStore = useAppStore();
    const [timerState, setTimerState] = useState<TimerState>({} as TimerState);

    useEffect(() => {
        let subscription = appStore.timer.subscribe((value) => setTimerState(value));
        return () => subscription.unsubscribe();
    }, []);

    const reset = () => {
        appStore.timer.change(INITIAL_TIMER_STATE);
    };

    const start = () => {
        appStore.timer.change({
            running: true,
            phase: "InProgress"
        });
    }

    const stop = () => {
        appStore.timer.change({
            running: false,
            phase: "ReadyToStart"
        });
    }

    const pause = () => {
        appStore.timer.change({
            running: false
        });   
    }

    return  <Layout
                header={<Navbar variant={timerState.running ? "color" : "paused"}/>}
                content={<TimerTemplate>
                            <BigTomato variant={timerState.running ? "color" : "paused"}/>
                        </TimerTemplate>}
                footer={<>
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
                                    onClick={() => start()}
                                    endIcon={<PlayArrowIcon />}
                                >Play</Button>
                            }
                        </>}
            />
};


export const CompletedStep = () => {
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
                    phase: "ReadyToStart",
                    running: true
                };
                appStore.timer.change(changes);   
            }, 250);
        }
    };

    return  <Layout
                header={<Navbar variant="color"/>}
                content={<TimerTemplate></TimerTemplate>}
                footer={<Button variant="contained" size="large" sx={buttonStyle}
                            onClick={() => gettingReady(null)}
                            endIcon={<ReplayIcon />}
                        >Restart</Button>}
            />;
};