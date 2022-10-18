import { Category } from "./Category";

type TimerPhase = "CategoryChoice" | "ReadyToStart" | "InProgress" | "Completed";

export interface TimerState {
    phase: TimerPhase;
    running: boolean;
    elapsedSeconds: number;
    category: Category | null;
}


export const INITIAL_TIMER_STATE : TimerState = {
    phase: "CategoryChoice",
    running: false,
    elapsedSeconds: 0,
    category: null
};  